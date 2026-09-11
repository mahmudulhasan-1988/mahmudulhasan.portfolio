import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://protfolio-web-mh:ywu7URpKTAAI2KjH@ac-mmp9lh3-shard-00-00.bljwodf.mongodb.net:27017,ac-mmp9lh3-shard-00-01.bljwodf.mongodb.net:27017,ac-mmp9lh3-shard-00-02.bljwodf.mongodb.net:27017/?ssl=true&replicaSet=atlas-12i85x-shard-0&authSource=admin&appName=Cluster0';
const DB_NAME = process.env.DB_NAME || 'portfolio_db';

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, { tls: true });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGODB_URI, { tls: true });
  clientPromise = client.connect();
}

export async function getDb() {
  const conn = await clientPromise;
  return conn.db(DB_NAME);
}
