export type IQuery<TEntity> = Partial<TEntity>;
export type WithoutID<TEntity> = Omit<TEntity, 'id'>;
