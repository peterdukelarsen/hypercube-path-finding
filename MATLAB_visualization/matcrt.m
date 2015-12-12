function t=matcrt(n) z=1; t=[0,1]; while size(t,1)~=n
    y=[zeros(1,2^z),ones(1,2^z)];
    t=[t,t];
    t=[t;y];
    z=z+1;
end
