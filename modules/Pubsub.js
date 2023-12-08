export function factory(container) {
  const { Config } = container;

  return {
    kv: {},
    db: null,
    async init() {
      if (!Config.FEATURE_FLAGS.queues.isEnabled) {
        return;
      }
      this.db = await Deno?.openKv();
    },
    onChange(key, value) {
      this.kv[key] = value;
    },
  };
}

export const initialize = true;
