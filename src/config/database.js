module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "paulie",
  database: "task-list",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
