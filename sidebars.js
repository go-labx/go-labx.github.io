/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'introduction',
    'quickstart',
    'routing',
    'middleware',
    'context',
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/contextual-data',
        'examples/cookie',
        'examples/routing_group',
        'examples/custom_not_found',
        'examples/success_and_fail',
      ],
    },
    'cli',
    'deployment',
    'faq',

    // {
    //   type: 'category',
    //   label: 'Tutorial',
    //   items: ['tutorial-basics/create-a-document'],
    // },
  ],
  middlewareSidebar: [
    'middlewares/introduction',

    {
      type: 'category',
      label: 'Official middleware',
      items: [
        'middlewares/requestid',
        'middlewares/compress',
        'middlewares/cors',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Community Middleware',
    //   items: ['middlewares/requestid'],
    // },
  ],
};

module.exports = sidebars;
