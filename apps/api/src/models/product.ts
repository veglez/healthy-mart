import { ArraySubDocumentType, Ref, getModelForClass, prop } from "@typegoose/typegoose";
import UserClass from "./user";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

class ProductClass {
  @prop()
  public name!: string;

  @prop()
  public category!: string; // is a reference

  @prop()
  public price!: number;

  @prop()
  public image!: string;

  @prop()
  public description!: string;

  @prop()
  public score?: number;

  @prop({ type: () => [Review] })
  public reviews?: ArraySubDocumentType<Review>[];
}

class Review extends TimeStamps {
  @prop({ ref: () => UserClass })
  public user!: Ref<UserClass>;

  @prop({ required: true })
  public score!: number;

  @prop({ required: true })
  public comment!: string;
}

export default ProductClass;

export const Product = getModelForClass(ProductClass);