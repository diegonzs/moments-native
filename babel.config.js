module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@realm/babel-plugin',
      'nativewind/babel',
      'react-native-reanimated/plugin',
    ],
  }
}
