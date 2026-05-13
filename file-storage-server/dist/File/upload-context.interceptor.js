"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadContextInterceptor = void 0;
const common_1 = require("@nestjs/common");
let UploadContextInterceptor = class UploadContextInterceptor {
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        req.uploadContext = {
            user: req.body?.user,
            roomId: req.body?.roomId,
        };
        return next.handle();
    }
};
exports.UploadContextInterceptor = UploadContextInterceptor;
exports.UploadContextInterceptor = UploadContextInterceptor = __decorate([
    (0, common_1.Injectable)()
], UploadContextInterceptor);
//# sourceMappingURL=upload-context.interceptor.js.map