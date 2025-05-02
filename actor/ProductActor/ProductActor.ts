import { Request, Response } from "express";
import { Responder } from "../middleware/Responder";
import { Pool } from "../middleware/Pool";

export class ProductActor {
    static async createProduct(req: Request, res: Response) {
        try {
            const {title, price, description} = req.body
            const product = await Pool.conn.product.create({
                data: {
                    title, price, description
                }
            })
            res.json(Responder.ok(product))
        } catch (e) {
            console.log(e)
            res.json(Responder.internal())
        }
    }
    static async createProductFeature(req: Request, res: Response) {
        try {
            const { product_id, title, icon, value } = req.body;
        } catch (e) {
            console.log(e);
            res.json(Responder.internal());
        }
    }
    static async createProductFilter(req: Request, res: Response) {
        try {
            const { title, type_id } = req.body;
            const productFilter = await prisma.productFilter.create({
                data: {
                    title,
                    type_id,
                }
            });
            res.json(Responder.ok(productFilter));
        } catch (e) {
            console.log(e);
            res.json(Responder.internal());
        }
    }
    
    static async createProductFilterItem(req: Request, res: Response) {
        try {
            const { title, filter_id } = req.body;
            const filterItem = await prisma.productFilterItem.create({
                data: {
                    title,
                    filter_id,
                }
            });
            res.json(Responder.ok(filterItem));
        } catch (e) {
            console.log(e);
            res.json(Responder.internal());
        }
    }
    
    static async createProductImage(req: Request, res: Response) {
        try {
            const { src, product_id } = req.body;
            const productImage = await prisma.productImage.create({
                data: {
                    src,
                    product_id,
                }
            });
            res.json(Responder.ok(productImage));
        } catch (e) {
            console.log(e);
            res.json(Responder.internal());
        }
    }
    
    static async createProductType(req: Request, res: Response) {
        try {
            const { title, product_id } = req.body;
            const productType = await prisma.productType.create({
                data: {
                    title,
                    product_id,
                }
            });
            res.json(Responder.ok(productType));
        } catch (e) {
            console.log(e);
            res.json(Responder.internal());
        }
    }
}
