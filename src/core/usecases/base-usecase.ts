export interface BaseUseCase<T, V> {
    invoke(params: T): V
}