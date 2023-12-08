export function factory(container) {
  const { Pubsub, Config } = container;
  return {
    listen() {
      Pubsub.db?.listenQueue(async (msg) => {
        if (!Config.FEATURE_FLAGS.queues.isEnabled) {
          return;
        }
        switch (msg.queueType) {
          case Config.QUEUES.sendMessagetoDiscord.queueName: {
            console.log("Process quque data")
          }
        }
      });
    },
  };
}

export const initialize = true;
