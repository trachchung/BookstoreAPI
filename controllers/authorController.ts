import {Author,Book} from "../model/model";
import express, {Express, Request, Response} from "express";


const authorController = {
    // add author
    addAuthor: async(req:Request, res:Response) => {
        res.status(200).json(req.body);
    }
}

module.exports = authorController;