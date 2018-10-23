export interface Deserializable {
  deserialize(input: any, depth?: number): this;
}