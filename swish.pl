girl(jane).
girl(mary).
girl(dianah).

can_cook(jaya).
can_cook(piraya).
can_cook(tasha).

likes(piraya,jaya):-
    can_cook(jaya).
likes(piraya,tasha):-
    can_cook(tasha).

female(pam).
female(liz).
female(pat).
female(ann).
male(jim).
male(bob).
male(tom).
male(peter).

parent(pam,bob).
parent(tom,bob).
parent(tom,liz).
parent(bob,ann).
parent(bob,pat).
parent(pat,jim).
parent(bob,peter).
parent(peter,jim).

mother(X,Y):-
    parent(X,Y),
    female(X).
father(X,Y):-
    parent(X,Y),
    male(X).
sister(X,Y):-
    parent(Z,X),
    parent(Z,Y),
    female(X).
brother(X,Y):-
    parent(Z,X),
    parent(Z,Y),
    male(X).
grand_parent(X,Y):-
    parent(X,Z),
    parent(Z,Y).
grand_mother(X,Y):-
    mother(X,Z),
    parent(Z,Y).
    
grand_father(X,Y):-
    father(X,Z),
    parent(Z,Y).
wife(X,Y):-
    parent(X,Z),
    parent(Y,Z),
    female(X),
    male(Y).
uncle(X,Z):-
    brother(X,Y),
    parent(Y,Z),
    male(X).



























