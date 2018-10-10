const moduleExists = require('../utils/moduleExists');

module.exports = {
  description: 'Add a module',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'User',
      validate: value => {
        if (/.+/.test(value)) {
          return moduleExists(value)
            ? 'A module with this name already exists'
            : true;
        }
        return 'The name is required';
      },
    },
  ],
  actions: () => [
    {
      type: 'add',
      path:
        '../../server/modules/{{camelCase name}}/{{camelCase name}}.route.js',
      templateFile: './module/route.js.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path:
        '../../server/modules/{{camelCase name}}/{{camelCase name}}.model.js',
      templateFile: './module/model.js.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path:
        '../../server/modules/{{camelCase name}}/{{camelCase name}}.controller.js',
      templateFile: './module/controller.js.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path:
        '../../server/modules/{{camelCase name}}/{{camelCase name}}.service.js',
      templateFile: './module/service.js.hbs',
      abortOnFail: true,
    },
  ],
};
