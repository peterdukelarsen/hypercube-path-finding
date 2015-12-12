function drw(mat) xax=mat(2,:);yax=mat(1,:); plot(xax,yax,'o')
t=matcrt(size(mat,1));

for c=1:360
    clf
    for x=1:size(t,2)-1
        for y=0:size(t,1)-1
            if t(y+1,x)==0
                line([xax(x),xax(x+2^y)],[yax(x),yax(x+2^y)])
            end
        end
    end
    mat=rote(mat,.02);
    xax=mat(1,:);yax=mat(2,:);
    pause(.08)
end
