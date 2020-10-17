const db = require('../../data/db-config');

const findAll = async () => {
  return await db('bridges').orderBy('id');
};

const getBridgeById = async (id) => {
  return db('bridges').where({ 'bridges.id': id });
};

const getAllProjectCodes = async () => {
  return await db('bridges').select('project_code');
};

const addBridge = async (newBridge) => {
  console.log(newBridge);

  return db('bridges').insert(newBridge).returning('id');
};

const updateBridge = async (id, changes) => {
  return db('bridges').where({ 'bridges.id': id }).update(changes);
};

const deleteBridge = async (id) => {
  return db('bridges').where({ 'bridges.id': id }).delete();
};

const findbyStage = async (stage) => {
  console.log(stage);
  return await db('bridges').where({ 'bridges.project_stage': stage });
};

const updateBridgeByProjectCode = (code, changes) => {
  return db('bridges').where({ project_code: code }).update(changes);
};

const findBridgeByProjectCode = (code) => {
  return db('bridges').where({ project_code: code });
};
const getBridgeGDP = (id) => {
  return db('bridges')
    .join('gdp', 'bridges.id', 'gdp.bridgeId')
    .select([
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
    ])
    .where({ 'bridges.id': id });
};

module.exports = {
  findAll,
  getBridgeById,
  findbyStage,
  addBridge,
  getAllProjectCodes,
  updateBridge,
  deleteBridge,
  updateBridgeByProjectCode,
  findBridgeByProjectCode,
  getBridgeGDP,
};
