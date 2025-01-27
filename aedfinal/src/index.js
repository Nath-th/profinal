"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var axios_1 = require("axios");
// Función para obtener un post aleatorio y sus comentarios
function getRandomPost() {
    return __awaiter(this, void 0, void 0, function () {
        var response, post, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get('https://tu-api/posts/random')];
                case 1:
                    response = _a.sent();
                    post = response.data;
                    console.log(post);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error al obtener el post:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Función para obtener los posts de un usuario
function getPostsByUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get("https://tu-api/users/".concat(userId, "/posts"))];
                case 1:
                    response = _a.sent();
                    posts = response.data;
                    console.log(posts);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Error al obtener los posts del usuario:', error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var option, _a, userId;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!true) return [3 /*break*/, 8];
                    console.log('Menú:');
                    console.log('1. Obtener un post aleatorio');
                    console.log('2. Obtener posts de un usuario');
                    console.log('3. Salir');
                    option = prompt('Ingrese una opción:');
                    _a = option;
                    switch (_a) {
                        case '1': return [3 /*break*/, 1];
                        case '2': return [3 /*break*/, 3];
                        case '3': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 1: return [4 /*yield*/, getRandomPost()];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 3:
                    userId = Number(prompt('Ingrese el ID del usuario:'));
                    return [4 /*yield*/, getPostsByUser(userId)];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 5:
                    console.log('Saliendo...');
                    return [2 /*return*/];
                case 6:
                    console.log('Opción inválida.');
                    _b.label = 7;
                case 7: return [3 /*break*/, 0];
                case 8: return [2 /*return*/];
            }
        });
    });
}
main();
