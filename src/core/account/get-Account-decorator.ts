import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Account } from "./entities";

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): Account => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
})