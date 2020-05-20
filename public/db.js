let db;

// new db request
const request = indexedDB.open("budget", 1);

// initialize
request.onupgradeneeded = function (event) {
	const db = event.target.result;
	db.createObjectStore("pending", { autoIncrement: true });
};
request.onsuccess = function (event) {
	db = event.target.result;
	// only use offline
	if (navigator.onLine) {
		checkDatabase();
	}
};
request.onerror = function (event) {
	console.log("Woops! " + event.target.errorCode);
};

// save transactions
function saveRecord(record) {
	const transaction = db.transaction(["pending"], "readwrite");
	const store = transaction.objectStore("pending");
	store.add(record);
}

// get stored transactions and clear db
function checkDatabase() {
	const transaction = db.transaction(["pending"], "readwrite");
	const store = transaction.objectStore("pending");
	const getAll = store.getAll();

	getAll.onsuccess = function () {
		if (getAll.result.length > 0) {
			fetch("/api/transaction/bulk", {
				method: "POST",
				body: JSON.stringify(getAll.result),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then(() => {
					const transaction = db.transaction(["pending"], "readwrite");
					const store = transaction.objectStore("pending");
					store.clear();
				});
		}
	};
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
