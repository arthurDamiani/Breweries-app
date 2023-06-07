/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/app/components',
            '@contexts': './src/core/contexts',
            '@domain': './src/core/domain',
            '@dtos': './src/core/dtos',
            '@hooks': './src/core/hooks',
            '@pages': './src/app/pages',
            '@routes': './src/routes',
            '@services': './src/core/services',
            '@storage': './src/core/storage',
            '@themes': './src/app/shared/styles/themes',
            '@shared': './src/app/shared',
            '@utils': './src/core/utils',
          },
        },
      ],
    ],
  };
};
