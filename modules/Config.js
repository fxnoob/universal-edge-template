export function service() {
  const FEATURE_FLAGS = {
    queues: {
      isEnabled: true,
    },
  };
  return {
    FEATURE_FLAGS: FEATURE_FLAGS,
    KV: {
      connection: {
        uri:
          "VALID_URL",
      },
    },
    QUEUES: {
      sendMessagetoDiscord: {
        queueName: "sendMessagetoDiscord",
      },
    },
  };
}
