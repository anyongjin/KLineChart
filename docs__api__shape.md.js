(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{B87W:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("dEAq"),c=a("H1Ra"),l=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"shape-help-api"},r.a.createElement(o["AnchorLink"],{to:"#shape-help-api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Shape Help API"),r.a.createElement("p",null,"Such apis are generally only used when customizing shapes."),r.a.createElement("h2",{id:"import"},r.a.createElement(o["AnchorLink"],{to:"#import","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Import"),r.a.createElement(c["a"],{code:"import { ... } from 'klinecharts/lib/mark/shapeHelper'",lang:"javascript"}),r.a.createElement("h2",{id:"api-list"},r.a.createElement(o["AnchorLink"],{to:"#api-list","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API list"),r.a.createElement("h3",{id:"getdistancecoordinate1-coordinate2"},r.a.createElement(o["AnchorLink"],{to:"#getdistancecoordinate1-coordinate2","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"getDistance(coordinate1, coordinate2)"),r.a.createElement("p",null,"Get the distance between two coordinates"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"coordinate1")," the first coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"coordinate2")," the second coordinate")),r.a.createElement("h3",{id:"gettrianglesquarecoordinate1-coordinate2-coordinate3"},r.a.createElement(o["AnchorLink"],{to:"#gettrianglesquarecoordinate1-coordinate2-coordinate3","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"getTriangleSquare(coordinate1, coordinate2, coordinate3)"),r.a.createElement("p",null,"Obtain the triangle area according to the three coordinates of the triangle -",r.a.createElement("code",null,"coordinate1")," the first coordinate -",r.a.createElement("code",null,"coordinate2")," second coordinate -",r.a.createElement("code",null,"coordinate3")," third coordinate"),r.a.createElement("h3",{id:"getrotatecoordinatecoordinate-targetcoordinate-angle"},r.a.createElement(o["AnchorLink"],{to:"#getrotatecoordinatecoordinate-targetcoordinate-angle","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"getRotateCoordinate(coordinate, targetCoordinate, angle)"),r.a.createElement("p",null,"Get the new coordinates after one coordinate rotates a certain angle around another coordinate"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"coordinate")," the coordinate to be rotated"),r.a.createElement("li",null,r.a.createElement("code",null,"targetCoordinate")," detour coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"angle")," angle")),r.a.createElement("h3",{id:"getlinearslopeinterceptcoordinate1-coordinate2"},r.a.createElement(o["AnchorLink"],{to:"#getlinearslopeinterceptcoordinate1-coordinate2","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"getLinearSlopeIntercept(coordinate1, coordinate2)"),r.a.createElement("p",null,"Get the slope k and intercept b of the linear function determined by two coordinates, and return ","{","k: xxx, b: xxx","}"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"coordinate1")," the first coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"coordinate2")," the second coordinate")),r.a.createElement("h3",{id:"getlinearyfromcoordinatescoordinate1-coordinate2-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#getlinearyfromcoordinatescoordinate1-coordinate2-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"getLinearYFromCoordinates(coordinate1, coordinate2, targetCoordinate)"),r.a.createElement("p",null,"Get the y value on the linear function determined by two coordinates according to the x coordinate."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"coordinate1")," the first coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"coordinate2")," the second coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"targetCoordinate")," target coordinate")),r.a.createElement("h3",{id:"getlinearyfromslopeinterceptkb-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#getlinearyfromslopeinterceptkb-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"getLinearYFromSlopeIntercept(kb, targetCoordinate)"),r.a.createElement("p",null,"Get the y value based on the x coordinate and slope intercept of a coordinate."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"kb")," slope and intercept"),r.a.createElement("li",null,r.a.createElement("code",null,"targetCoordinate")," target coordinate")),r.a.createElement("h3",{id:"checkcoordinateonstraightlinecoordinate1-coordinate2-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#checkcoordinateonstraightlinecoordinate1-coordinate2-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"checkCoordinateOnStraightLine(coordinate1, coordinate2, targetCoordinate)"),r.a.createElement("p",null,"Determine whether a coordinate is on a straight line determined by two coordinates."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"coordinate1")," the first coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"coordinate2")," the second coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"targetCoordinate")," target coordinate")),r.a.createElement("h3",{id:"checkcoordinateonraylinecoordinate1-coordinate2-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#checkcoordinateonraylinecoordinate1-coordinate2-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"checkCoordinateOnRayLine(coordinate1, coordinate2, targetCoordinate)"),r.a.createElement("p",null,"Determine whether a coordinate is on the ray determined by two coordinates."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"coordinate1")," the first coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"coordinate2")," the second coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"targetCoordinate")," target coordinate")),r.a.createElement("h3",{id:"checkcoordinateonsegmentcoordinate1-coordinate2-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#checkcoordinateonsegmentcoordinate1-coordinate2-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"checkCoordinateOnSegment(coordinate1, coordinate2, targetCoordinate)"),r.a.createElement("p",null,"Determine whether a coordinate is on the line segment determined by two coordinates."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"coordinate1")," the first coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"coordinate2")," the second coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"targetCoordinate")," target coordinate")),r.a.createElement("h3",{id:"checkcoordinateonarccirclecentercoordinate-radius-startangle-endangle-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#checkcoordinateonarccirclecentercoordinate-radius-startangle-endangle-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"checkCoordinateOnArc(circleCenterCoordinate, radius, startAngle, endAngle, targetCoordinate)"),r.a.createElement("p",null,"Determine whether a coordinate is on an arc."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"circleCenterCoordinate")," center coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"radius")," radius"),r.a.createElement("li",null,r.a.createElement("code",null,"startAngle")," start angle"),r.a.createElement("li",null,r.a.createElement("code",null,"endAngle")," end angle"),r.a.createElement("li",null,r.a.createElement("code",null,"targetCoordinate")," target coordinate")),r.a.createElement("h3",{id:"checkcoordinateincirclecirclecentercoordinate-radius-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#checkcoordinateincirclecirclecentercoordinate-radius-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"checkCoordinateInCircle(circleCenterCoordinate, radius, targetCoordinate)"),r.a.createElement("p",null,"Determine whether a coordinate is inside the circle."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"circleCenterCoordinate")," center coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"radius")," radius"),r.a.createElement("li",null,r.a.createElement("code",null,"targetCoordinate")," target coordinate")),r.a.createElement("h3",{id:"checkcoordinateoncirclecirclecentercoordinate-radius-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#checkcoordinateoncirclecirclecentercoordinate-radius-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"checkCoordinateOnCircle(circleCenterCoordinate, radius, targetCoordinate)"),r.a.createElement("p",null,"Determine whether a coordinate is on the circle."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"circleCenterCoordinate")," center coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"radius")," radius"),r.a.createElement("li",null,r.a.createElement("code",null,"targetCoordinate")," target coordinate")),r.a.createElement("h3",{id:"checkcoordinateintriangletrianglecoordinates-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#checkcoordinateintriangletrianglecoordinates-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"checkCoordinateInTriangle(triangleCoordinates, targetCoordinate)"),r.a.createElement("p",null,"Check if the coordinates are inside the triangle -",r.a.createElement("code",null,"triangleCoordinates")," the coordinates of the triangle -",r.a.createElement("code",null,"targetCoordinate")," target coordinates"),r.a.createElement("h3",{id:"checkcoordinateindiamondcentercoordinate-width-height-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#checkcoordinateindiamondcentercoordinate-width-height-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"checkCoordinateInDiamond(centerCoordinate, width, height, targetCoordinate)"),r.a.createElement("p",null,"Check if the coordinates are inside the triangle rhombus -",r.a.createElement("code",null,"centerCoordinate")," the middle coordinate of the diamond -",r.a.createElement("code",null,"width")," diamond width -",r.a.createElement("code",null,"height")," diamond height -",r.a.createElement("code",null,"targetCoordinate")," target coordinate"),r.a.createElement("h3",{id:"checkcoordinateinrectcoordinate1-coordinate2-targetcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#checkcoordinateinrectcoordinate1-coordinate2-targetcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"checkCoordinateInRect(coordinate1, coordinate2, targetCoordinate)"),r.a.createElement("p",null,"Check if the coordinates are inside the rectangle -",r.a.createElement("code",null,"coordinate1")," the first coordinate -",r.a.createElement("code",null,"coordinate2")," second coordinate -",r.a.createElement("code",null,"targetCoordinate")," target coordinate"),r.a.createElement("h3",{id:"getraylinecoordinate1-coordinate2-maxcoordinate"},r.a.createElement(o["AnchorLink"],{to:"#getraylinecoordinate1-coordinate2-maxcoordinate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"getRayLine(coordinate1, coordinate2, maxCoordinate)"),r.a.createElement("p",null,"Obtain the ray from two coordinates."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"coordinate1")," the first coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"coordinate2")," the second coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"maxCoordinate")," the extreme value on the coordinate")),r.a.createElement("h3",{id:"getparallellinescoordinates-maxcoordinate-extendparallelinecount"},r.a.createElement(o["AnchorLink"],{to:"#getparallellinescoordinates-maxcoordinate-extendparallelinecount","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"getParallelLines(coordinates, maxCoordinate, extendParalleLineCount)"),r.a.createElement("p",null,"Get parallel lines."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"coordinates")," The coordinates on the determined line"),r.a.createElement("li",null,r.a.createElement("code",null,"maxCoordinate")," the extreme value on the coordinate"),r.a.createElement("li",null,r.a.createElement("code",null,"extendParalleLineCount")," number of parallel lines"))))}));t["default"]=e=>{var t=r.a.useContext(o["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(l,{demos:a})}}}]);