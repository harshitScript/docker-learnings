import redis from "redis"

// Create Redis Client
const client = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

// Handle Connection Events
client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

// Example: Set and Get a Key-Value
export async function connectRedis() {
    try {
        await client.connect();
        console.log('Redis connected successfully.')
        return true
    } catch {
        console.log('Failed to connect redis!')
        return false
    }
}

export const redisClient = client;



