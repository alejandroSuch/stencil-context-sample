exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  bundles: [
    { components: ['my-component'] }
  ],
  globalScript: 'src/global.ts',
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
