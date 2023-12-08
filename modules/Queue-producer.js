export function factory(container) {
  const { Pubsub, Config } = container;
  return {
    sendMessageToDiscord(props) {
      try {
        return Pubsub.db?.enqueue(
          { ...props, queueType: Config.QUEUES.sendMessagetoDiscord.queueName },
          {
            delay: 0,
          }
        );
      } catch (e) {
        console.log("Error in QueueProducer", { e });
      }
    },
  };
}

export const initialize = true;
