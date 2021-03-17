module.exports = {
  type: 'sqlite',
  database: 'data/dev.sqlite',
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*.{js,ts}'],
  seeds: ['dist/migrations/seeders/*.seed.{js,ts}'],
  factories: ['dist/migrations/factories/*.factory.{js,ts}'],
  cli: {
    migrationsDir: 'dist/migrations',
    entitiesDir: 'dist/entities',
    seedersDir: 'dist/migrations/seeds',
    factoriesDir: 'dist/migrations/factories',
  },
  synchronize: false,
  logging: true,
};
