import amqp from 'amqplib';

let channel: amqp.Channel;

export const connectRabbitMQ = async() =>{
    try {
        const connection = await amqp.connect({
            protocol: 'amqp',
            hostname: process.env.RABBITMQ_HOST,
            port: 5672,
            username: process.env.RABBITMQ_USER,
            password: process.env.RABBITMQ_PASSWORD,
        });

        channel = await connection.createChannel();

        console.log("✅ Connected to RabbitMQ successfully");
    } catch (error) {
        console.error("Failed to connect to RabbitMQ", error);
    }
}

export const publishToQueue = async(queueName:string, message:any) => {
    if (!channel) {
        console.log("Rabbitmq channel is not initialized");
        return;
    }
    
    await channel.assertQueue(queueName, {durable: true});

    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
        persistent: true,
    });
};