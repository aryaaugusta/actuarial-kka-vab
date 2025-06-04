import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActuarialCalculator from "@/components/ActuarialCalculator";
import RetirementCalculator from "@/components/RetirementCalculator";

const Calculator = () => {

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <ActuarialCalculator/>
            <Footer/>
        </div>
    );
};

export default Calculator;
