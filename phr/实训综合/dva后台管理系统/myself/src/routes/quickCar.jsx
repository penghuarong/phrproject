import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './car.css';
import { Layout,Carousel } from 'antd';
const {
  Header, Content
} = Layout;
const mapStateToprops = (state)=>{
  const example = state.example;
  console.log(state,124)
  return {
    ...example
  }
}
@connect(mapStateToprops)
class quickCar extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    entry=()=>{
        console.log(this.props,1244354)
        if(window.localStorage.getItem("token")){
            this.props.history.push("/admin")
        }else{
            this.props.history.push("/login")
        }
    }
  render(){
    return (
        <div>
            <Layout>
                <Header className={styles.antLayoutHeader}>
                    
                    <ul>
                        <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTIuNiA0MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0MjNhMmM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgMjc8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8zIiBkYXRhLW5hbWU9IuWbvuWxgiAzIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNS40NSw3LjNsMCwwYTE4LjI0LDE4LjI0LDAsMCwwLTEuOTItMiwuMS4xLDAsMCwwLS4wNSwwLDE0LjQ4LDE0LjQ4LDAsMCwwLTE5LjIxLjI5LDEyLDEyLDAsMSwxLDYuOSwyMi40NS42Ni42NiwwLDAsMS0uNzMtLjY2LDguNCw4LjQsMCwwLDEsLjgxLTMuNjEsNy41MSw3LjUxLDAsMCwxLDIuMzMtMi44Myw2LDYsMCwxLDAtNy4xNC0uMDUsOCw4LDAsMCwxLDMuMiw2LjR2LjA5YS42Ni42NiwwLDAsMS0uNzMuNjZBMTIsMTIsMCwwLDEsOCwxNi4wN3YtLjI4YzAtLjE0LDAtLjI3LDAtLjQxczAtLjE3LDAtLjI1LDAtLjExLDAtLjE2bDAtLjQxQTE2LDE2LDAsMCwxLDIzLC4yMywyMCwyMCwwLDAsMCwwLDIwYTIwLDIwLDAsMCwwLDQwLDAsMTkuMDUsMTkuMDUsMCwwLDAtLjEtMkExOS45NCwxOS45NCwwLDAsMCwzNS40NSw3LjNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDkuNjgsMjMuMjNjMy4xNywwLDQuODktMS44OSw0Ljg5LTQuODVBNC4zNyw0LjM3LDAsMCwwLDUwLDEzLjY3YTQuMzEsNC4zMSwwLDAsMC0zLjY1LDEuOTJjLjA1LTIuNTEuNjgtNS43NywzLjY3LTUuNzdBMi41NCwyLjU0LDAsMCwxLDUyLjQyLDExYTEuNTksMS41OSwwLDAsMCwxLjgxLjc1Yy0uMzItMi4yMy0xLjg4LTMuNC00LjE5LTMuNC00LjMxLDAtNS4yOSw0LjI2LTUuMjksNy44MkM0NC43NSwyMC41Nyw0Ni4wNiwyMy4yMyw0OS42OCwyMy4yM1ptLjExLTguMTJhMy4wOCwzLjA4LDAsMCwxLDMuMTQsMy4zMSwzLjE2LDMuMTYsMCwwLDEtMy4xNiwzLjQzYy0yLjA1LDAtMy4xMy0xLjQ2LTMuMi0zLjQzQTMuMTksMy4xOSwwLDAsMSw0OS43OSwxNS4xMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02NCwxMy42N2E0LjMxLDQuMzEsMCwwLDAtMy42NSwxLjkyYzAtMi41MS42OC01Ljc3LDMuNjctNS43N0EyLjU0LDIuNTQsMCwwLDEsNjYuMzksMTFhMS41OSwxLjU5LDAsMCwwLDEuODEuNzVjLS4zMi0yLjIzLTEuODgtMy40LTQuMTktMy40LTQuMzEsMC01LjI5LDQuMjYtNS4yOSw3LjgyLDAsNC4zOSwxLjMxLDcuMDUsNC45Myw3LjA1LDMuMTcsMCw0Ljg5LTEuODksNC44OS00Ljg1QTQuMzcsNC4zNywwLDAsMCw2NCwxMy42N1ptLS4yNSw4LjE4Yy0yLjA1LDAtMy4xMy0xLjQ2LTMuMi0zLjQzYTMuMTksMy4xOSwwLDAsMSwzLjIyLTMuMzEsMy4wOCwzLjA4LDAsMCwxLDMuMTQsMy4zMUEzLjE2LDMuMTYsMCwwLDEsNjMuNzQsMjEuODVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNODAuNTgsMTMuNjhsLS43My0yLjYxYTEuMDgsMS4wOCwwLDAsMC0xLjM0LS43NVY3LjU2YTEuODEsMS44MSwwLDAsMC0xLjgxLDEuOFYyMy41MmExLjgsMS44LDAsMCwwLDEuODEtMS44VjExLjFsLjQsMS42OEExLjI4LDEuMjgsMCwwLDAsODAuNTgsMTMuNjhaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTAsMjMuNTZhMS44NiwxLjg2LDAsMCwwLS40Ni0yLjVjLTEuMzctMS0zLjIxLTIuMzgtMy44LTMuODZoNS4xNmExLjUsMS41LDAsMCwwLTEuNDktMS41SDg5VjExLjA5YS44Ni44NiwwLDAsMC0uODUtLjg2SDg1LjI2VjcuNTZhMS44MiwxLjgyLDAsMCwwLTEuODMsMS44MnYuODVIODEuMDdhMS4yMiwxLjIyLDAsMCwwLDEuMTksMS41MWgxLjE3djIuNjdjMCwuNDYsMCwuODgsMCwxLjI5aC00YTEuMjIsMS4yMiwwLDAsMCwxLjE5LDEuNWgyLjU0Yy0uMzksMS41Ni0xLjk0LDIuNzktMy4zNCwzLjg5YTEuNzYsMS43NiwwLDAsMC0uMzksMi40MmMyLjI4LTEuNCw0LjQ2LTIuOTEsNS4yLTQuOUM4NS41NywyMC43NSw4OC4wNywyMi41Niw5MCwyMy41NlptLTQuNzctOS4xNXYtLjk0QTEuNzMsMS43MywwLDAsMSw4NywxMS43NGEuMjMuMjMsMCwwLDEsLjIyLjJ2MS43OGEyLDIsMCwwLDEtMiwyQzg1LjI0LDE1LjI5LDg1LjI2LDE0Ljg3LDg1LjI2LDE0LjQxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjkzLDE1LjEybC42OS0zLjY0YTEuMzMsMS4zMywwLDAsMC0xLjY0LDFsLS42NiwzLjZBMS4zLDEuMywwLDAsMCw3NS45MywxNS4xMloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05Ny4zOCwxOS44MUgxMDR2My43NWExLjgzLDEuODMsMCwwLDAsMS44My0xLjgzVjE5LjgxaDYuNzlhMS41LDEuNSwwLDAsMC0xLjQ5LTEuNWgtNS4zVjE2LjU2aDVhMS41LDEuNSwwLDAsMC0xLjQ5LTEuNWgtMy40N3YtM0ExLjgyLDEuODIsMCwwLDAsMTA0LDEzLjg4djEuMThoLTMuNTlsMS44Mi00aDkuMThhMS40OCwxLjQ4LDAsMCwwLTEuNDctMS40OGgtN0wxMDMuNTksOEEyLjIzLDIuMjMsMCwwLDAsMTAxLDkuMmwtLjE2LjM0SDk3LjI3QTEuMTQsMS4xNCwwLDAsMCw5OC4zNSwxMWgxLjg0TDk4LjMsMTUuMThhLjkyLjkyLDAsMCwwLC44NCwxLjM4SDEwNHYxLjc1SDk2LjI5QTEuMTUsMS4xNSwwLDAsMCw5Ny4zOCwxOS44MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MS4wOSwyNi44MnY2LjFhLjY3LjY3LDAsMCwwLC42OC0uNjh2LTYuMUEuNjguNjgsMCwwLDAsNTEuMDksMjYuODJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDkuMDYsMzIuMjRINDYuMzRhLjY4LjY4LDAsMCwxLS42OC0uNjdWMjYuMTRhLjY3LjY3LDAsMCwwLS42Ny42OHY1LjQyYS42Ny42NywwLDAsMCwuNjcuNjhoNC4wN0EuNjguNjgsMCwwLDAsNDkuMDYsMzIuMjRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjMuMywzMi4yM0g2MC41OWEuNjguNjgsMCwwLDEtLjY4LS42OFYyNi4xMmEuNjkuNjksMCwwLDAtLjY4LjY4djUuNDNhLjY5LjY5LDAsMCwwLC42OC42OEg2NEEuNjcuNjcsMCwwLDAsNjMuMywzMi4yM1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01Ny4yLDI2LjgydjMuNzNhMS43LDEuNywwLDAsMS0zLjQsMFYyNi44MmEuNjcuNjcsMCwwLDAtLjY3LS42OHY0LjQxYTIuMzcsMi4zNywwLDAsMCw0Ljc0LDBWMjYuMTRBLjY3LjY3LDAsMCwwLDU3LjIsMjYuODJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjUuMzQsMjYuODJ2Ni4xYS42Ny42NywwLDAsMCwuNjctLjY4di02LjFBLjY3LjY3LDAsMCwwLDY1LjM0LDI2LjgyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTkyLjQ3LDI2Ljh2Ni4xMWEuNjkuNjksMCwwLDAsLjY4LS42OFYyNi4xMkEuNjguNjgsMCwwLDAsOTIuNDcsMjYuOFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03MS40NCwyNi44MnYzLjczYTEuNywxLjcsMCwwLDEtMy4zOSwwVjI2LjgyYS42Ny42NywwLDAsMC0uNjgtLjY4djQuNDFhMi4zOCwyLjM4LDAsMCwwLDQuNzUsMFYyNi4xNEEuNjguNjgsMCwwLDAsNzEuNDQsMjYuODJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNODMuNjUsMjYuODJ2My43M2ExLjcsMS43LDAsMCwxLTMuMzksMFYyNi44MmEuNjcuNjcsMCwwLDAtLjY4LS42OHY0LjQxYTIuMzgsMi4zOCwwLDAsMCw0Ljc1LDBWMjYuMTRBLjY4LjY4LDAsMCwwLDgzLjY1LDI2LjgyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc4LDI2LjhhLjU4LjU4LDAsMCwwLS45LS4xN2wtMywyLjc2VjI2LjE0YS42OC42OCwwLDAsMC0uNjguNjh2Ni4xYS42Ny42NywwLDAsMCwuNjgtLjY4VjMwLjM4bDEtLjk0LDIuMSwzLjE5YS44OS44OSwwLDAsMCwxLjEyLjI4TDc1LjU5LDI5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwNS4zNiwyNi4xNHYyLjcxSDEwMlYyNi4xNGEuNjcuNjcsMCwwLDAtLjY4LjY4djYuMWEuNjguNjgsMCwwLDAsLjY4LS42OFYyOS41M2gzLjM5djIuNzFhLjY3LjY3LDAsMCwwLC42OC42OHYtNi4xQS42OC42OCwwLDAsMCwxMDUuMzYsMjYuMTRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTExLjQ2LDI2LjgyYS42OC42OCwwLDAsMCwuNjgtLjY4aC00Ljc1djYuNzhoNC43NWEuNjguNjgsMCwwLDAtLjY4LS42OGgtMy4zOVYyOS41M2gyLjcyYS42Ny42NywwLDAsMCwuNjctLjY4aC0zLjM5di0yWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTg4LjA2LDI2LjEybC0yLjM3LDYuNzlhMSwxLDAsMCwwLC45LS42NHYwaDMuNnYwYTEsMSwwLDAsMCwuOS42NGwtMi4zNy02Ljc5Wm0tMS4yMiw1LjQzLDEuNTYtNC40Nkw5MCwzMS41NVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05Ny4zMywyNi44MmExLjg5LDEuODksMCwwLDEsMS41NiwxLC44Mi44MiwwLDAsMCwuNzIuMzhoLjIxYTIuNzgsMi43OCwwLDAsMC0yLjQ5LTJjLTEuNSwwLTIuNzEsMS41Mi0yLjcxLDMuMzlzMS4yMSwzLjM5LDIuNzEsMy4zOWEyLjc4LDIuNzgsMCwwLDAsMi40OS0yaC0uMjFhLjgyLjgyLDAsMCwwLS43Mi4zOCwxLjg5LDEuODksMCwwLDEtMS41NiwxYy0xLjEyLDAtMi0xLjIxLTItMi43MVM5Ni4yMSwyNi44Miw5Ny4zMywyNi44MloiLz48L2c+PC9nPjwvc3ZnPg==" alt=""/></li>
                        <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAsCAYAAAATmipGAAAAAXNSR0IArs4c6QAAA+VJREFUWAnVmM9LVFEUx2dMjX5gZWppQVJCP4gikMhoIQhFQYuwNoFRmxYtalPUok3/QbSQJNsEBWU/ECqSEIqSoEWBSaSVZWYFRSFlmIX2Oc95lzvH+2Yc573JDnznnnPuued83333vrnvxWIhyNjYWCk4C3rAIOgA+0JIHV4KCFWCz8AlzeFVyjIT7O66GFq+nVmW8IbnZZMEMrMYX5smx440/ZPqnjJRSJZR4SjIT1S6RrsEVICWhE+aGmIXWnZuVIpuAq3gD7Cl3GeAs8zuQP8JmsAaPyayliKyaW6DIJFl4AkBBQFBo/hvgSo/NtSWxAfBEHDJCM47oMAvip4PukCQyAwf9uOzbkmWB04HVHuC/wgoDSpEXzU4B34AlzTjNBcYlCetnyRnHNkH8GW0k4kvAo2OXOK6COJpyQQFMPiQZFFyCXtB0Jh0fsZuA3KhWk6lG+vsJ0sF+K6yHXcGZ+gkZwl4pnL/xl6bYapYjEHnVaLGjJOkGEDuxeCTqtGWYsjELgbPBvZsvsOeOzEyOw859wBb5NG1dNJZCd5lj0Y/NunBGQaSW05btgQ+slx/oatUvSvKDtO8rJKtVLYxXUSXmd5YbDgej/dZdthqt0pYqWxjuojaM/rWREajvFFpJ38WYMHYu/G6ShSqSa159gJFlw3l3LhJM0pQEUwWWWx6LD10lWU1SNIPVmL5h1pt2UZNIopXn2pemcjolBcq9ZSIvlZJojD/G6J659ub2UyMvvXLTU8sNoL+3rKjUvWMOp+lmugKi00fi33UsqNS9YxWsan99zBTMxXRXhMVrdJP+mGrhByk7TvrdRmiXEUhHnmL9EU/jH1/qG3irr1USSfcfkOUwEpg2zkhmiCon9duosymvEGeSAzym+e+koO2U9XYD6d1ST5ZuKAN+CLfkeqSgiI2qBcHB4B9Dpa33lpTOhFAY2S36cyxAoO9hsW40kszw6OBcl91FueYnykHj2LFRUzvRCWbR/+/zzQjc6+4anvfDYTofMXnBlexGcgGy4lILalJsVZHwTnik0X8gHaLI2C6uNbzrO2UGZXH0th0YaV4PMLuEl8ebDtoG8A3cUwjuQeXev+8ISdqT1gCcrrfDjaAEjD+WEBRIh9wM/r2ZI3/gn7TsrU6hGMAtEPwse7MyJYLAvZH3I3pEhBfD0Sa0sWG2k/BFq/s+M/VVMkJKQUfE/E1qWJD76OonBm/JopLc9JVBP988FQCkAuumMh9FK4D8hXOl3aUrUBmsBw0gH4g0gFcD/PIeXoFKC7EukGQyHu6fBn8Z3/LZiYgUQjkE/lDIMvhF+gD8iW52gRmqfwFojVWrVGsdSQAAAAASUVORK5CYII=" alt=""/><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAABXlJREFUWAm1WEtsVFUY/s59zNzpa8rMtJQBLFKIILREq9H4JGFhMSYmrgSJSxfExIXsjGisj4ToxoVrMaAbTTQhoIkbiQsiQQQiSHVAxagp0lDaaed15/idc2d6OzN37h0QT3Mf8z+/+5///Oc/FbiJIeXf3Zi/+gRk9UlAjAAyCymy2oSQf5LGS+YgjKPoGfhKiKF8p+ZFJ4Iy/+M9cN1XKbsTUjqd6ECIAuWOwTQnRfeW01E6oUDk4vlhlCpvQWA3AYTKtnUkhITEx4hZr4jE3b+1k2trXM6e3ckwf0LFZDvlm6TPcup2ieTYsSA9I4gob5x7mVE4Qt7tAqHcJJVNbTvAaQsQLSir73IqGnhSSpz54TwKi2rqb3Eom7QdBKbRmTcdB5rduBUXhw99joMHP4OTaMzVq9PX8PPUZfx6+Q+UiqVm1Ta/5QFv6n32Uo54iVk+Q1bDdLiui3fe/gAXp3IwDAN79z7Pj6rip4s5nDx5FjMz15esxWI2tm9/ELt3PY24E1+it3mZRczeVk9gH8js2UNMzuealaamLmFy8n1UGJVOx53r1uK1119CPB4FRhxm8u5RdjWQWp04FbREjx//Dh99+Cnyi4vBOGhBcGULPqtSiegbNm8eQSaTxh1rs9ix4yEkuhKt+mppm+a4qjOW5rru/iAQ2qx0YZkmuvh1hXKZfqjLKbItm5dFO+pb9PcQgkS5VEG+UMCFCznS1QWcOPE9Jt/cR7CenCaqm6pNXqF8xtJle256YonZ9DI4kEGhVEK348CJCDXjApUnVf4tFIoePgYod+l3zFy7jnRmRZN1/XOnwmB4e0f7sn3XphGkUkkNJsgKA4RiuYS5xQWk++PYumEIa1YNoIdTkertQ2+iS6vl8wtB6ioqjsJgeRtYsIyiqpWSSSeRn5vD7Pw8K7XNPU1QXzKqLhzHwmPb1uLR+zZjMLuGGl74T537BYe/+Ba2bUEUBJ92eyfcRJkjehdtL0TOjRt57N0zgYXZGVzIXUGhWEGmrwsj61Zh/fp1iDndLfrjoxtw9JvTmJsvwBQGEomwFSRGCIRbecRw4jYGUiuQHF6NsbHRCGmf/fgDW3Dk61OwYxaSyV6f0fImsyy5tX6ihekTenq6maghofVFG942Dg9xSUuC38TpbCjiDXIKQwjXl82kVzAhKz6hw7dMqg/lSgUPP3J/pIbBasSuKnysWb0SxY73Ed+WqjO9yS6Mj2/1iUFvxMCIqPYufNw7thG93d4yDJds5b74wrNceWYro4EiFBD2mBEj4RZvKUeU2WyPV7zDXcgcp4aNbsSw+9O16hAh2MRWFcXuzzRRA34Sg6iV+H90hQuQqZMqrCHFmen6z46e8dQgrGQqXFY12b2DGaPW8n8ZLg1t0KyV6yhZxTedrmgQnqFjCoO3fE3zDW6N3v4d4sUZXA3DioVIeCyD5dxZGVknuU50GzCptDQQfe5QLX/UYPYnssMw443t4nI1IxaHs2qYljtIUvqsn3m8iChLPHfwzpY/YogynFQCVtxXrWtY3E4S/cz/Kg94slont3uyVdQ+Nb+hU9ENrTpGNHXwWrJMjIW/aN/v4qsVA5USAbG/sWIuDNt3rnoTxNO8VnIKmrYHIarsoZ5afsZpAKIcLh0ntHfelOOFK5Bux8fYuqZ+Cu68iA/xGvTpwtgn+kbf8wm1HFlO0AIUZCJ5n+eyV62y27rlQSCili/KZgAIZbolInV/DUdO9q0osoaUrnLW/PDXZYOeOhKxAS8SQpd4zm37I2dbIMp46yGcK7wyB5R5lnE5ZVUeqGRtV1ZfbXBpm1xRdj8Lj+o/aP6/HsKXf2XtuLGftInWClwvP03fdDv/LbEcjHr/P/9R8y+/buXpzKgUAAAAAABJRU5ErkJggg==" alt=""/></li>
                    </ul>
                </Header>
                <Layout>
                    <Content>
                        <div className={styles.content}>
                        <p onClick={()=>this.entry()} style={{color:"red"}}>入口</p>
                            <Carousel autoplay className={styles.carouselImg}>
                                <div><img src="https://yunlian-truck-res-img-prod.oss-cn-beijing.aliyuncs.com/dl1xK6GQ/2FUXE4a7.jpg" alt=""/></div>
                                <div><img src="https://yunlian-truck-res-img-prod.oss-cn-beijing.aliyuncs.com/MAJXnn5M/8TV7KQbQ.jpg" alt=""/></div>
                                <div><img src="https://yunlian-truck-res-img-prod.oss-cn-beijing.aliyuncs.com/dl1xK6GQ/2FUXE4a7.jpg" alt=""/></div>
                                <div><img src="https://yunlian-truck-res-img-prod.oss-cn-beijing.aliyuncs.com/MAJXnn5M/8TV7KQbQ.jpg" alt=""/></div>
                            </Carousel>
                            <div className={styles.introduce}>
                                <h2>石化货运  上66快车</h2>
                                <p>
                                66快车是由中化能源科技有限公司出品，国内首家针对石化产品公路运输的第四方智慧物流平台。66快车通过大数据智能分析，为货主、承运方提供全程可视化、智能调度、评级评价、用户画像、保险金融、车货匹配等服务，真正深入石化产品公路运输全过程，打造“互联网+石化运输”智慧物流平台。
                                </p>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
      </div>
    );
  }
}
export default quickCar;