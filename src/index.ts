import optionInterface from "./interfaces/options"
import express from "express"

const init = async (app: express.Application, options: optionInterface) => {
    console.log(options.name)
}