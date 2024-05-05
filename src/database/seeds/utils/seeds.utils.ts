import { Repository } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

export const seedData = async <T>(repository: Repository<T>, seeds: Array<QueryDeepPartialEntity<T>>, incremental = false): Promise<{ sown: boolean }> => {
  if (incremental) {
    const sown = await repository.insert(seeds)
    return { sown: !!sown }
  }

  const existingRecords = await repository.count()
  if (existingRecords === 0) {
    const sown = await repository.insert(seeds)
    return { sown: !!sown }
  }

  return { sown: false }
}
