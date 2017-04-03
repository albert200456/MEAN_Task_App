"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var comment_service_1 = require("../../services/comment.service");
var CommentsComponent = (function () {
    function CommentsComponent(commentService) {
        var _this = this;
        this.commentService = commentService;
        this.commentService.getComments()
            .subscribe(function (comments) {
            console.log(comments);
            _this.comments = comments;
        });
    }
    CommentsComponent.prototype.addComment = function () {
        var _this = this;
        event.preventDefault();
        var newComment = {
            name: this.name,
            company: this.company,
            phone: this.phone,
            email: this.email
        };
        this.commentService.addComment(newComment)
            .subscribe(function (comment) {
            _this.comments.push(comment);
            _this.name = '';
            _this.company = '';
            _this.phone = '';
            _this.email = '';
        });
    };
    CommentsComponent.prototype.deleteComment = function (id) {
        var comments = this.comments;
        this.commentService.deleteComment(id).subscribe(function (data) {
            if (data) {
                for (var i = 0; i < comments.length; i++) {
                    if (comments[i]._id == id) {
                        comments.splice(i, 1);
                    }
                }
            }
        });
    };
    return CommentsComponent;
}());
CommentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'comments',
        templateUrl: 'comments.component.html'
    }),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentsComponent);
exports.CommentsComponent = CommentsComponent;
//# sourceMappingURL=comments.component.js.map