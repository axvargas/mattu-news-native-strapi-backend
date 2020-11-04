module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'A:\Asus\Documents\UDEMYCOURSES\ReactNativeANApps\MattuNews\data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
