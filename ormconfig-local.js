module.exports = {
  type: 'sqlite',
  database: 'data/dev.sqlite',
  entities: ['src/**/*.entity.{js,ts}'],
  migrations: ['src/migrations/*.{js,ts}'],
  seeds: ['src/migrations/seeders/*.seed.{js,ts}'],
  factories: ['src/migrations/factories/*.factory.{js,ts}'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities',
    seedersDir: 'src/migrations/seeds',
    factoriesDir: 'src/migrations/factories',
  },
  synchronize: false,
  logging: true,
};
