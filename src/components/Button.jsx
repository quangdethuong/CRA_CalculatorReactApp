import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

const getStyleName = btn => {

    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
    }
    return className[btn]
}
const Button = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)
    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    const resetClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
    }

    const handleClickNumber = () => {
        const numberString = value.toString();
        console.log('numberString: ', numberString);
        console.log('calc.num :', calc.num);
        console.log('calc.res :', calc.res);

        console.log('calc.sign: ', calc.sign);
        let numberValue;
        if (numberString === '0' && calc.num === '0') {
            numberValue = "0"
        }
        else {
            numberValue = Number(calc.num + numberString)
        }
        setCalc({
            ...calc,
            num: numberValue,
        })
    }


    // click operation
    const signClick = () => {
        console.log('signClick', value);
        console.log('calc.res before click', calc.res);
        console.log('calc.num before click', calc.num);
        console.log('calc.sign before click', calc.sign);


        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })

        console.log('calc.res after click', calc.res);
        console.log('calc.num after click', calc.num);
        console.log('calc.sign after click', calc.sign);



    }

    const equalClick = () => {
        if (calc.res && calc.num) {
            const math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'x': (a, b) => a * b,
                    '/': (a, b) => a / b

                }
                return result[sign](a, b)
            }

            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }


    }

    const handleClick = () => {
        console.log(value);

        setCalc({

        })

        const results = {
            '.': commaClick,
            'C': resetClick,
            '/': signClick,
            'x': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalClick
        }

        if (results[value]) {
            return results[value]()
        }
        else {
            return handleClickNumber();
        }


    }
    return (
        <button onClick={handleClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button