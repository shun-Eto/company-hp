import MongoDB from "mongodb";

//	types
export type Filter = MongoDB.FilterQuery<any>;
export type FindOneOptions = MongoDB.FindOneOptions;
export type Update = MongoDB.UpdateQuery<any> | Partial<any>;
export type UpdateOptions = MongoDB.UpdateManyOptions;
