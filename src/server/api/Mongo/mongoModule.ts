import MongoDB from "mongodb";

//	types
import SelfTypes from "./_type";

export default class {
	init: Promise<any>;
	connection: MongoDB.MongoClient;
	config = {
		uri: process.env["MONGO_URI"] || "",
		options: {
			retryWrites: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	};

	/********** constructor **********/
	constructor(root?: string, filename?: string) {
		this.init = this.init_connect(root, filename).then((val) => {
			this.connection = val;
		});
	}

	/********** methods **********/
	//	init_connect
	init_connect(root?: string, filename?: string): Promise<MongoDB.MongoClient> {
		const message = root && filename ? `${root} ---> ${filename}` : "nothing";
		console.log(`** MongoDB ** init_connect : ${message}`);

		return new Promise((resolve, reject) => {
			const { uri, options } = this.config;

			MongoDB.MongoClient.connect(uri, options, (err, result) => {
				if (!err) {
					console.log(`success connect MongoDB!! : ${message}`);
					return resolve(result);
				} else {
					console.log("failed connect MongoDB");
					return reject(err);
				}
			});
		});
	}

	/********** function : findOne **********/
	findOne<T>(args: {
		dbName: string;
		collectionName: string;
		filter?: SelfTypes.Filter;
		options?: SelfTypes.FindOneOptions;
	}): Promise<{ result: T | null; exist: boolean }> {
		return new Promise((resolve, reject) => {
			//	properties
			const { dbName, collectionName, options } = args;
			const filter = args.filter || {};

			const db = this.connection.db(dbName);
			db.collection(collectionName, (err, collection) => {
				if (!err) {
					collection.findOne(filter, options || {}, (err, result) => {
						if (!err) {
							return resolve({ result, exist: !!result });
						} else {
							return reject({ err });
						}
					});
				} else {
					return reject(err);
				}
			});
		});
	}

	/********** function : findOne **********/
	findOneAndUpdate(args: {
		dbName: string;
		collectionName: string;
		filter: SelfTypes.Filter;
		update: SelfTypes.Update;
		options?: SelfTypes.FindOneOptions;
	}): Promise<{ result: any | null; exist: boolean }> {
		return new Promise((resolve, reject) => {
			//	properties
			const { dbName, collectionName, filter, update, options } = args;

			//	this.(function) : connect()
			/*
			 *	1 findOne
			 *	 1.1 !err ... success :
			 *	 1.2 err ... failed :
			 *		2 findOneAndUpdate
			 *		 2.1 !err ... success :
			 *		 2.2 err ... failed :
			 */
			const db = this.connection.db(dbName);
			db.collection(collectionName, (err, collection) => {
				if (!err) {
					//	1 findOne
					collection.findOne(filter, options || {}, (err, document) => {
						if (!err) {
							//	1.1 !err ... success :

							//	2 findOneAndUpdate
							collection.findOneAndUpdate(filter, update, (err, result) => {
								if (!err) {
									//	2.1 !err ... success :
									return resolve({
										result: document,
										exist: true,
									});
								} else {
									//	2.2 err ... failed :
									return reject({ err });
								}
							});
						} else {
							//	1.2 err ... failed :
							return reject({ err });
						}
					});
				} else {
					//	failed : mongodb connect
					return reject(err);
				}
			});
		});
	}

	/********** function : find **********/
	find<T>(args: {
		dbName: string;
		collectionName: string;
		filter?: SelfTypes.Filter;
		options?: SelfTypes.FindOneOptions;
		limit?: number;
		keyOrList?: string | object | object[];
	}): Promise<{ result: T[]; exist: boolean }> {
		return new Promise((resolve, reject) => {
			//	properties
			const { dbName, collectionName, options } = args;
			const filter = args.filter || {};
			const limit = args.limit || 10;
			const keyOrList = args.keyOrList || {};

			const db = this.connection.db(dbName);
			db.collection(collectionName, (err, collection) => {
				if (!err) {
					collection
						.find(filter, options || {})
						.limit(limit)
						.sort(keyOrList)
						.toArray((err, result: T[]) => {
							if (!err) {
								return resolve({
									result,
									exist: result.length !== 0,
								});
							} else {
								return reject();
							}
						});
				} else {
					return reject(err);
				}
			});
		});
	}

	/********** insertOne **********/
	insertOne(args: {
		dbName: string;
		collectionName: string;
		documentData: any;
	}): Promise<{ result: boolean }> {
		return new Promise((resolve, reject) => {
			/********** properties **********/
			const { dbName, collectionName, documentData } = args;

			const db = this.connection.db(dbName);
			db.collection(collectionName, (err, collection) => {
				if (!err) {
					collection.insertOne(documentData, (err) => {
						if (!err) {
							return resolve({ result: true });
						} else {
							return reject(err);
						}
					});
				} else {
					return reject(err);
				}
			});
		});
	}

	/********** deleteOne **********/
	deleteOne(args: {
		dbName: string;
		collectionName: string;
		filter: SelfTypes.Filter;
	}): Promise<{ result: boolean }> {
		return new Promise((resolve, reject) => {
			/********** properties **********/
			const { dbName, collectionName, filter } = args;

			const db = this.connection.db(dbName);
			db.collection(collectionName, (err, collection) => {
				if (!err) {
					collection.deleteOne(filter, (err) => {
						if (!err) {
							return resolve({ result: true });
						} else {
							return reject(err);
						}
					});
				} else {
					return reject(err);
				}
			});
		});
	}

	/********** deleteOne **********/
	updateMany(args: {
		dbName: string;
		collectionName: string;
		filter: SelfTypes.Filter;
		update: SelfTypes.Update;
		options?: SelfTypes.UpdateOptions;
	}): Promise<{ result: boolean }> {
		return new Promise((resolve, reject) => {
			/********** properties **********/
			const { dbName, collectionName, filter, update } = args;
			const options = args?.options || {};

			const db = this.connection.db(dbName);
			db.collection(collectionName, (err, collection) => {
				if (!err) {
					collection.updateMany(
						filter,
						update,
						{ ...options },
						(err, result) => {
							if (!err) {
								return resolve({ result: true });
							} else {
								return reject(err);
							}
						}
					);
				} else {
					return reject(err);
				}
			});
		});
	}
}
