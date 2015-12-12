function god=rote(mat,x) if size(mat,1)==3
    god=[cos(x)^2,         -sin(x)*cos(x)+sin(x)^2*cos(x),   sin(x)^2+sin(x)*cos(x)^2;
         sin(x)*cos(x),    cos(x)^2+sin(x)^3,                -sin(x)*cos(x)+sin(x)^2*cos(x);
         -sin(x),          sin(x)*cos(x),                    cos(x)^2]*mat;
end

if size(mat,1)==4
    god=[(cos(x)^2+sin(x)^3)*cos(x),                     sin(x)*cos(x)^2+(cos(x)^2+sin(x)^3)*sin(x)^2,         (-sin(x)*cos(x)+sin(x)^2*cos(x))*cos(x)+(-sin(x)^2*cos(x)+(cos(x)^2+sin(x)^3)*sin(x)*cos(x))*sin(x),        -(-sin(x)*cos(x)+sin(x)^2*cos(x))*sin(x)+(-sin(x)^2*cos(x)+(cos(x)^2+sin(x)^3)*sin(x)*cos(x))*cos(x);
         (-sin(x)*cos(x)+sin(x)^2*cos(x))*cos(x),        cos(x)^3+(-sin(x)*cos(x)+sin(x)^2*cos(x))*sin(x)^2,   (sin(x)^2+sin(x)*cos(x)^2)*cos(x)+(-sin(x)*cos(x)^2+(-sin(x)*cos(x)+sin(x)^2*cos(x))*sin(x)*cos(x))*sin(x), -(sin(x)^2+sin(x)*cos(x)^2)*sin(x)+(-sin(x)*cos(x)^2+(-sin(x)*cos(x)+sin(x)^2*cos(x))*sin(x)*cos(x))*cos(x);
         sin(x)*cos(x)^2,                                -sin(x)*cos(x)+sin(x)^3*cos(x),                       cos(x)^3+(sin(x)^2+sin(x)^2*cos(x)^2)*sin(x),                                                               -sin(x)*cos(x)^2+(sin(x)^2+sin(x)^2*cos(x)^2)*cos(x);
         -sin(x),                                        sin(x)*cos(x),                                        sin(x)*cos(x)^2,                                                                                            cos(x)^3]*mat;
end
