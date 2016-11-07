`2016/09/08` Thursday
# Topic 1: Data Analysis
## Example of the pendulum
**What factors affect the period T of the pendulum?**

![demo](source/pendulum.png)

- <del>amplitude</del>
- length of string √
- <del>mass of the bob</del>
- <del>shape of the bob/ air resistance</del>
- <del>force of gravity</del>


**Sketch these graphs showing:**  
a) Period increases linearly with amplitude  
<img src="source/pendulum_sketch_a.png" alt="sketch a" style="width: 275px;"/>  
b) Period is independent of amplitude  
<img src="source/pendulum_sketch_b.png" alt="sketch b" style="width: 275px;"/>  
c) Period decreases exponentially with amplitude  
<img src="source/pendulum_sketch_c.png" alt="sketch c" style="width: 275px;"/>  


**Experiment: find out the relation between length of string and period**  
<img src="source/pendulum_length_scatter.png" alt="results" style="width: 450px;"/>

## Naming Variables
- Independent variable:
	- the person doing the experiment changes this variable
	- *=>length of string* 
- Dependent variable:
	- *=>time period* 
	- <strong style='color: red'>Variable can change, constant cannot</strong>
- Controlled variable:
	- things we try to keep constant for faire experiment.

## Graphing data
<img src='source/graph_demo.png'>

Remember:  

- Title
- Axis title

## Mathematical modelling 
### Linear function 

		y = ax + b
>a, b: <spam style='color: red'>constants</spam>  
>x: <spam style='color: red'>independent variable</spam>  
>y: <spam style='color: red'>dependent variable</spam>  


#### <spam style='color: red'>Example: object accelerating with constant acceleration</spam>
   <img src='source/linear_demo.png'>  
   Acceleration is <img src='source/speed_demo.png'>.  
   <img src='source/speed_formula.png'>
   > v(t): speed <spam style='color: red'>variable</spam>  
> t: time <spam style='color: red'>variable</spam>  
> v_0: initial velocity <spam style='color: red'>constant</spam>
> a: acceleration <spam style='color: red'>constant</spam>

	y = mx + c
> x, y: <spam style='color: red'>variable</spam>  
> m: slope <spam style='color: red'>constant</spam>
> c: y-intersect <spam style='color: red'>constant</spam>

	v(t) <-> y 
	v_0  <-> 0
	m <-> acceleration
	t <-> x

### Non-linear relationship  
Problem: slope isn't constant
<img src='source/pendulum_period_graph.png'>

- Example of pendulum
	- Theoritical relationship:  
	<img src='source/pendulum_equation.gif'> 
		- g = 9.8 m/s
	- Linear relationship (**squared**):  
	<img src='source/pendulum_equation_2.gif'>
	- gravity deduced from the equation:  
	<img src='source/pendulum_equation_1.gif'>  
	
		 > <spam style='color: red'>variable:</spam> *T, l*  
		 > <spam style='color: red'>constant:</spam> *(4π^2)/g*
		 
9.81 m/s<sup>2</sup> - **actual**  
9.61 m/s<sup>2</sup> - **experimental / observed**  
accuracy rate = <img src="source/accuracy.png">

## Tools for analysis of results
Mean result x̅ is <img src="source/mean_result_0.png"> which is equilavent to <img src="source/mean_result_1.png">.  
(∑: sum of ...   ; i: index, can be 0, 1, 2, 3...)

- **Accurate result**  
- **Precise result**  

### Precision is how closely packed your results are with respect to the mean.  

- precise
	
	 <img src="source/precise.png">  
- not precise  
	
	 <img src="source/not_precise.png">  

We can measure precision by calculating the **standard deviation**.   
**Standard deviation**: <img src="source/stddev.png"> (x̅ : mean of x)  
Example:  
Calculate the standard deviation of x:   
<img src="source/stddev_ex_cal.png">  
<img src="source/stddev_ex.png">  


### Accuracy is a measurement of how close to the theoritical result (T) our experiment is. 

- accurate

	<img src="source/accurate.png">
- not accurate

	<img src="source/not_accurate.png">

## Measurement errors
### Random error
Errors that have no particular bia.   
=> Each measurement could be higher or lower with an equal distribution around the mean:  
<img src="source/random_err.jpg">

### Systematic error
Error that is always in the same direction.  
***Example:*** *A scale hasn't been zeroed.*  
<img src="source/systematic_err.gif">
## Measurement uncertainty - Treating errors
### <a href="errors_how-to.pdf">Treating observational errors</a>

>**1) Uncertainties due to manual measurements**>If you measure the height of drop of a ball using a ruler, the minimum uncertainty in its height will be half the smallest graduation of the ruler. Hence, if the height measured is 1,25m and the smallest graduation is 1mm, the uncertainty is at least 1,250±0,005m.  >In practice however you will often find that this is not realistic – you will need to estimate the uncertainty that you think is reasonable with respect to your experimental setup and justify.
>You must quote your result to the same level of precision as your uncertainty – for example 1,25±0,05m not 1,25±0,2m
>**2) Uncertainties due to electronic measurements**
>Let’s say you are measuring the mass of a ball on an electronic scale. The uncertainty in your measurement is the smallest increment the measuring device gives. For instance, 42,25±0,01g if the scale gives a reading to 0,01g.

### Combining uncertainty
Use fractional uncertainty:  
<a href=errors_how-to.pdf><img src="source/fractional_uncertainty.jpg"></a>

