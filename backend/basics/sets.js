const redisClient = require("../config/redis");


// 1. SADD - Add members
const addSkills = async () => {
  try {
    await redisClient.sAdd("skills", [
      "javascript",
      "react",
      "node",
      "redis"
    ]);

    console.log("Skills added successfully");
  } catch (error) {
    console.log("Error while adding skills:", error);
  }
};


// 2. SMEMBERS - Get all members
const getAllSkills = async () => {
  try {
    const skills = await redisClient.sMembers("skills");

    console.log("All skills:", skills);
  } catch (error) {
    console.log("Error while fetching skills:", error);
  }
};


// 3. SISMEMBER - Check member
const checkSkill = async () => {
  try {
    const result = await redisClient.sIsMember(
      "skills",
      "javascript"
    );

    if (result) {
      console.log("Javascript is a member");
    } else {
      console.log("Javascript is not a member");
    }
  } catch (error) {
    console.log("Error while checking skill:", error);
  }
};


// 4. SCARD - Get number of members
const getSkillCount = async () => {
  try {
    const count = await redisClient.sCard("skills");

    console.log("Total skills:", count);
  } catch (error) {
    console.log("Error while getting skill count:", error);
  }
};


// 5. SREM - Remove member
const removeSkill = async () => {
  try {
    const result = await redisClient.sRem(
      "skills",
      "redis"
    );

    console.log("Skill removed:", result);
  } catch (error) {
    console.log("Error while removing skill:", error);
  }
};


// 6. SPOP - Remove random member
const removeRandomSkill = async () => {
  try {
    const skill = await redisClient.sPop("skills");

    console.log("Random skill removed:", skill);
  } catch (error) {
    console.log("Error while removing random skill:", error);
  }
};


// 7. SRANDMEMBER - Get random member without removing
const getRandomSkill = async () => {
  try {
    const skill = await redisClient.sRandMember("skills");

    console.log("Random skill:", skill);
  } catch (error) {
    console.log("Error while getting random skill:", error);
  }
};


// 8. SMOVE - Move member between Sets
const moveSkill = async () => {
  try {
    const result = await redisClient.sMove(
      "frontend",
      "backend",
      "javascript"
    );

    console.log("Move result:", result);
  } catch (error) {
    console.log("Error while moving skill:", error);
  }
};


// 9. SUNION - Combine Sets
const getUnion = async () => {
  try {
    const result = await redisClient.sUnion([
      "frontend",
      "backend"
    ]);

    console.log("Union:", result);
  } catch (error) {
    console.log("Error while getting union:", error);
  }
};


// 10. SINTER - Common members
const getIntersection = async () => {
  try {
    const result = await redisClient.sInter([
      "frontend",
      "backend"
    ]);

    console.log("Intersection:", result);
  } catch (error) {
    console.log("Error while getting intersection:", error);
  }
};


// 11. SDIFF - Difference
const getDifference = async () => {
  try {
    const result = await redisClient.sDiff([
      "frontend",
      "backend"
    ]);

    console.log("Difference:", result);
  } catch (error) {
    console.log("Error while getting difference:", error);
  }
};