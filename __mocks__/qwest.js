var qwest = {
  'get': jest.genMockFunction().mockReturnThis(),
  'then': jest.genMockFunction().mockReturnThis(),
  'catch': jest.genMockFunction().mockReturnThis()
};

module.exports = qwest;
