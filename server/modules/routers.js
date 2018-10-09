const fs = require('fs');
const path = require('path');

module.exports = expressRouter => {
  console.log('Registering routers...', expressRouter);

  const modulesPath = path.resolve(__dirname, './');
  const routers = fs
    .readdirSync(modulesPath)
    .filter(file => fs.statSync(`${modulesPath}/${file}`).isDirectory());
  routers.forEach(router => {
    const modelPath = `${modulesPath}/${router}/${router}.route.js`;
    if (fs.existsSync(modelPath)) {
      const requiredRouters = require(modelPath); // eslint-disable-line
      if (!Array.isArray(requiredRouters)) return;
      const rrLength = requiredRouters.length;
      for (let i = 0; i < rrLength; i += 1) {
        const { method, url, handler } = requiredRouters[i];
        const fullUrl = `/${router}${url}`;
        switch (method) {
          case 'get':
            expressRouter.get(fullUrl, handler);
            break;
          case 'post':
            expressRouter.post(fullUrl, handler);
            break;
          case 'put':
            expressRouter.put(fullUrl, handler);
            break;
          default:
            break;
        }
        console.log(` > ${method} ${fullUrl}`);
      }
    }
  });
  return expressRouter;
};
