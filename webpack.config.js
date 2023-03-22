const path = require('path');

module.exports = {
  // Входной файл вашего приложения
  entry: './src/index.js',
  output: {
    // Выходная папка, куда webpack сгенерирует готовый билд
    path: path.join(__dirname, 'dist'),
    // Имя файла, сгенерированного в результате сборки
    filename: 'bundle.js',
    // Путь для подключения файлов из директории dist в index.html
    publicPath: '/',
  },
  // Настройки сервера разработки, указываем contentBase как путь к корневой папке
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  ...
};
