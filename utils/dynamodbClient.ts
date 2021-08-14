/**
 * Created by Pablo Silva
 * Date: 2021/08/12
 * Time: 12:56
 */

import {DynamoDB} from "aws-sdk";

const options = {
    region: "localhost",
    endpoint: "http://localhost:8000"
}

const isOffline = () => {
    return process.env.IS_OFFLINE
}

export const document = isOffline() ? new DynamoDB.DocumentClient(options) : new DynamoDB.DocumentClient()