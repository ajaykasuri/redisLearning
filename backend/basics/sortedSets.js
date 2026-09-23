const redisClient = require("../config/redis");


// 1. ZADD - Add members with scores
const addScores = async () => {
  try {
    await redisClient.zAdd("leaderboard", [
      { score: 100, value: "Ajay" },
      { score: 150, value: "Rahul" },
      { score: 120, value: "John" }
    ]);

    console.log("Scores added successfully");
  } catch (error) {
    console.log("Error while adding scores:", error);
  }
};


// 2. ZRANGE - Get members in ascending score order
const getLeaderboard = async () => {
  try {
    const result = await redisClient.zRange(
      "leaderboard",
      0,
      -1
    );

    console.log("Leaderboard:", result);
  } catch (error) {
    console.log("Error while getting leaderboard:", error);
  }
};


// 3. ZSCORE - Get score of a member
const getScore = async () => {
  try {
    const score = await redisClient.zScore(
      "leaderboard",
      "Ajay"
    );

    console.log("Ajay score:", score);
  } catch (error) {
    console.log("Error while getting score:", error);
  }
};


// 4. ZCARD - Get number of members
const getMemberCount = async () => {
  try {
    const count = await redisClient.zCard("leaderboard");

    console.log("Total members:", count);
  } catch (error) {
    console.log("Error while getting member count:", error);
  }
};


// 5. ZREM - Remove a member
const removeMember = async () => {
  try {
    const result = await redisClient.zRem(
      "leaderboard",
      "Ajay"
    );

    console.log("Removed members:", result);
  } catch (error) {
    console.log("Error while removing member:", error);
  }
};


// 6. ZRANK - Get rank in ascending order
const getRank = async () => {
  try {
    const rank = await redisClient.zRank(
      "leaderboard",
      "Ajay"
    );

    console.log("Ajay rank:", rank);
  } catch (error) {
    console.log("Error while getting rank:", error);
  }
};


// 7. ZREVRANK - Get rank in descending order
const getReverseRank = async () => {
  try {
    const rank = await redisClient.zRevRank(
      "leaderboard",
      "Ajay"
    );

    console.log("Ajay reverse rank:", rank);
  } catch (error) {
    console.log("Error while getting reverse rank:", error);
  }
};


// 8. ZINCRBY - Increase/decrease score
const increaseScore = async () => {
  try {
    const newScore = await redisClient.zIncrBy(
      "leaderboard",
      10,
      "Ajay"
    );

    console.log("Ajay new score:", newScore);
  } catch (error) {
    console.log("Error while increasing score:", error);
  }
};


// 9. ZPOPMIN - Remove member with lowest score
const removeLowest = async () => {
  try {
    const result = await redisClient.zPopMin(
      "leaderboard"
    );

    console.log("Lowest score removed:", result);
  } catch (error) {
    console.log("Error while removing lowest score:", error);
  }
};


// 10. ZPOPMAX - Remove member with highest score
const removeHighest = async () => {
  try {
    const result = await redisClient.zPopMax(
      "leaderboard"
    );

    console.log("Highest score removed:", result);
  } catch (error) {
    console.log("Error while removing highest score:", error);
  }
};


// Call one operation at a time

addScores();

// getLeaderboard();
// getScore();
// getMemberCount();
// removeMember();
// getRank();
// getReverseRank();
// increaseScore();
// removeLowest();
// removeHighest();