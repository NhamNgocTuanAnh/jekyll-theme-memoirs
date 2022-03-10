---
layout: post
title:  "Chương 7. Ánh xạ tuyến tính"
author: john
categories: [ Toán học ]
tags: [ Toán cao cấp ]
image: assets/images/math/anh-xa-tuyen-tinh-chuong-7.jpg
# rating: 4.5
comments: false
header-includes:
  - \usepackage{boxed}
  - \usepackage{colorbox}
---

### 7.1 Định nghĩa và ví dụ
#### 7.1.1 Định nghĩa

Ánh xạ $$T:V\to W$$ từ không gian vectơ   $V$ đến không gian vectơ   $$W$$ được gọi là <span style="color:red">ánh xạ tuyến tính</span> nếu thỏa mãn hai tính chất sau với mọi $$u,v\in V$$ và với mọi $$k\in \R$$:

1)   $$T(ku)=kT(u)$$ (tính bảo toàn phép nhân với vô hướng) \\
2)   $$T(u+v)=T(u)+T(v)$$ (tính bảo toàn phép cộng).

#### 7.1.2. Định nghĩa   

Ánh xạ $$T:V\to V$$ của không gian vectơ   $$V$$ được gọi là [biến đổi tuyến tính]{cyan}  của không gian vectơ  $$V$$ nếu thỏa mãn hai tính chất sau với mọi $$u,v\in V$$ và với mọi $$k\in \R$$:\\
1) $$T(ku)=kT(u)$$ \\
2) $$T(u+v)=T(u)+T(v)$$
#### Câu hỏi
Ánh xạ $$T:V\to W$$ từ không gian vectơ $$V$$ đến không gian vectơ   <span style="color:red">$$W$$ KHÔNG là ánh xạ tuyến tính</span> khi nào?
#### Hướng dẫn 
 Ánh xạ $$T:V\to W$$ từ không gian vectơ $$V$$ đến không gian vectơ   <span style="color:red">$$W$$  KHÔNG là ánh xạ tuyến tính</span>  nếu  nó vi phạm một trong hai điều kiện trên. Tức là 
1)   Tồn tại $$ k \in \mathbb{R } $$ , tồn tại $$u \in V$$ sao cho $$T(ku)\neq kT(u)$$. hoặc
2) 	 Tồn tại $$u,v \in V$$ sao cho $$T(u+v)\neq T(u)+T(v)$$. \end{enumerate} 
#### 7.1.3 Tính chất
Cho $$T:V\to W$$ là ánh xạ tuyến tính, thì: \\
1)   $$T(k_1v_1+k_2v_2)=k_1T(v_1)+k_2T(v_2)$$ với mọi $$v_1,v_2\in V$$ và $$k_1,k_2\in \R$$.\\
	Tổng quát hơn: $$T(k_1v_1+k_2v_2+\cdots+k_rv_r)=k_1T(v_1)+k_2T(v_2)+\cdots+k_rT(v_r)$$. \\
2)  $$T(0)=0$$.   \\
3)  $$T(u-v)=T(u)-T(v)$$. \\
### Chứng minh
1) Với mọi $$v_1,v_2\in V$$ và $$k_1,k_2\in \R$$ ta đều có $$   T(k_1v_1+k_2v_2)=T(k_1v_1)+T(k_2v_2)= k_1T(v_1)+k_2T(v_2).   $$
Tổng quát $$T(k_1v_1+k_2v_2+\cdots+k_rv_r)= T(k_1v_1)+T(k_2v_2)+\cdots+T(k_rv_r)=k_1T(v_1)+k_2T(v_2)+\cdots+k_rT(v_r)$$.
2) $$T(0)=T(0+0)=T(0)+T(0)$$. Suy ra $$T(0)=0$$.
3) $$T(u-v)=T(1.u+(-1)v))=1.T(u)+(-1)T(v)=T(u)-T(v)$$ với mọi $$u,v \in V$$.
#### 7.1.4  Ví dụ minh họa
##### Ví dụ 1   (Ánh xạ đồng nhất)
Cho $$ V $$ là không gian vectơ. Chứng minh rằng ánh xạ đồng nhất $$ Id_V:V \to V $$, $$ Id_V(v)=v $$ với mọi $$ v\in V $$ là một ánh xạ tuyến tính. \\
#### Hướng dẫn giải

1) Với mọi $$u \in V$$, với mọi $$k \in \mathbb{R } $$ ta đều có    <span style="color:red"> $$\boxed{ Id_V(ku)$$</span> $$=ku=k.u =$$ <span style="color:red"> $$\boxed{ k Id_V(u).$$ </span> 	Suy ra $$Id_V$$ bảo toàn phép nhân vô hướng. \\
2) Với mọi $$ u,v \in V $$ ta đều có $$ \colorbox[rgb]{0.0,1.0,0.0}{ \boxed{  Id_V( u+v)}}= u+v=  \colorbox[rgb]{0.0,1.0,0.0}{ \boxed{  Id_V(u)+ Id_V(v)}} . $$ \\
Suy ra $$Id_V$$ bảo toàn phép cộng. \\
Vậy  $$Id_V$$ là một ánh xạ tuyến tính.  
#### Ví dụ 2.   
**Ánh xạ co và giãn.** Cho $$V$$ là không gian vectơ, $$k\in \R$$ cho trước, ánh xạ $$T_1:V\to V$$, $$T_1(v)=kv$$ với mọi $$v\in V$$. Nếu $$0<k<1$$ thì $$T_1$$ được gọi là phép co, và nếu $$k>1$$ thì $$T_1$$ được gọi là phép giãn của $$ V $$ với hệ số $$k$$.

#### Hướng dẫn giải

1) Với mọi $$v \in V$$ và với mọi $$m \in \mathbb{R } $$ ta có $ \colorbox[rgb]{1.0,1.0,0.0}{ \boxed{  T_1(mv)}}=k(mv)=m(kv)=  \colorbox[rgb]{1.0,1.0,0.0}{ \boxed{  mT_1(v)}}$$. Suy ra $$T_1$$ bảo toàn phép nhân vô hướng. \\
2) Với mọi $$v,v' \in V$$ ta đều có $$ \colorbox[rgb]{0.0,1.0,1.0}{ \boxed{ T_1(v+v')}}=k(v+v')= kv+kv'= \colorbox[rgb]{1.0,1.0,0.0}{ \boxed{  T_1(v)+T_1(v')}}$$. Suy ra $$T_1$$ bảo toàn phép cộng.  
Vậy $$T_1$$ là ánh xạ tuyến tính.  
#### Ví dụ 3. 
Cho ánh xạ $$T_2:P_n\to P_{n+1}$$, $$T_2(p(x)=c_0+c_1x+\cdots+c_nx^n)=xp(x)=c_0x+c_1x^2+\cdots+c_nx^{n+1}$$.
Chứng minh rằng  $$T_2$$ là một ánh xạ tuyến tính.
#### Hướng dẫn giải 

1) Với mọi $$p(x)= c_0+c_1x+\cdots+c_nx^n \in P_n$$, với mọi $$k \in \mathbb{R } $$ ta đều có 
$$   \colorbox[rgb]{0.0,1.0,1.0}{ \boxed{ T_2 (kp(x))}}= T_2( kc_0+kc_1x+\cdots+ kc_nx^n) = kc_0x+kc_1 x^2 +\cdots+ kc_nx^{n+1}$$ $$=k(c_0x+c_1x^2+\cdots+c_nx^{n+1})= \colorbox[rgb]{0.0,1.0,1.0}{ \boxed{   k T_2(p(x))}}.$$ 

2)  Với mọi $$p(x)=c_0+c_1x+\cdots+c_nx^n ,q(x)=c'_0+c'_1x+\cdots+c'_nx^n \in V=P_n$$ ta đều có
$$  \colorbox[rgb]{0.0,1.0,0.0}{ \boxed{  T_2( p(x)+q(x))}}=  T_2( (c_0+c'_0)+(c_1+c_1')x+\cdots+ (c_n+c'_n)x^n )$$ $$= (c_0+c'_0)x+(c_1+c_1')x^2+\cdots+ (c_n+c'_n)x^{n+1}$$ $$= (c_0x+c_1x^2+\cdots+c_nx^{n+1})+  (c'_0x+c'_1x^2+\cdots+c'_nx^{n+1} ) =\colorbox[rgb]{0.0,1.0,0.0}{ \boxed{  T_2(p(x))+T_2(q(x)).}}   $$ 

Vậy $$T_2$$ là một ánh xạ tuyến tính.
		

