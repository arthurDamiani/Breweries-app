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
            '@screens': './src/app/screens',
            '@routes': './src/core/routes',
            '@services': './src/core/services',
            '@themes': './src/app/shared/styles/themes',
            '@shared': './src/app/shared',
            '@utils': './src/core/utils',
            '@contexts': './src/core/contexts',
            '@locales': './src/core/i18n/locales',
          },
        },
      ],
    ],
  };
};
