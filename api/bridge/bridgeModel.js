const db = require('../../data/db-config');

const findAll = async () => {
  return await db('bridges');
};

const getAllProjectCodes = async () => {
  return await db('bridges').select('Project Code');
};

const addBridge = async (newBridge) => {
  return db('bridges').insert(newBridge);
};

const findbyStage = async (stage) => {
  console.log(stage);
  return await db('bridges').where({ 'bridges.project_stage': stage });
};

module.exports = { findAll, findbyStage, addBridge, getAllProjectCodes };