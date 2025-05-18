import React from "react";
import { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./products.css";
import pro1 from "./Asset/protien1.jpg";
import pro4 from "./Asset/protien4.jpg";
import pro5 from "./Asset/protien5.jpg";
import pro7 from "./Asset/protien7.jpg";

const Product = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const addWheelScroll = (container) => {
      const handleWheel = (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      };
      container.addEventListener("wheel", handleWheel);
      return () => container.removeEventListener("wheel", handleWheel);
    };

    const cleanup1 = addWheelScroll(scrollRef1.current);
    const cleanup2 = addWheelScroll(scrollRef2.current);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);
  return (
    <>
      <section className="Product" id="Product">
        <h1 className="pro-1-h1">OUR Products</h1>
        <div className="product-slider">
          <h2 className="pro-2-h2">Newly Released Products</h2> <hr></hr>
          <div className="products" ref={scrollRef1}>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#f1f3f5",
              }}
            >
              <Card.Img variant="top" src={pro1} />
              <Card.Body>
                <Card.Title className="pro-title">Proten-Pro</Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto "
                  style={{ backgroundColor: "		#6610f2", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#f1f3f5",
              }}
            >
              <Card.Img variant="top" src={pro4} />
              <Card.Body>
                <Card.Title className="pro-title">Protein-ProMax</Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto "
                  style={{ backgroundColor: "		#6610f2", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#f1f3f5",
              }}
            >
              <Card.Img variant="top" src={pro1} />
              <Card.Body>
                <Card.Title className="pro-title">
                  Casein Slow Digest Protein
                </Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto "
                  style={{ backgroundColor: "		#6610f2", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#f1f3f5",
              }}
            >
              <Card.Img variant="top" src={pro4} />
              <Card.Body>
                <Card.Title className="pro-title">Mass Gainer Pro+</Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto "
                  style={{ backgroundColor: "		#6610f2", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>{" "}
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#f1f3f5",
              }}
            >
              <Card.Img variant="top" src={pro1} />
              <Card.Body>
                <Card.Title className="pro-title">
                  {" "}
                  Collagen Boost Protein
                </Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto"
                  style={{ backgroundColor: "		#6610f2", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#f1f3f5",
              }}
            >
              <Card.Img variant="top" src={pro4} />
              <Card.Body>
                <Card.Title className="pro-title">
                  BCAA Enhanced Whey{" "}
                </Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto "
                  style={{ backgroundColor: "			#6610f2", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="product-slider">
          <h2 className="pro-2-h2">Discounted Products</h2> <hr></hr>
          <div className="products" ref={scrollRef2}>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#fbe9e7",
              }}
            >
              <Card.Img variant="top" src={pro7} />
              <Card.Body>
                <Card.Title className="pro-title">Proten-Pro</Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto"
                  style={{ backgroundColor: "				#fd7e14", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#fbe9e7",
              }}
            >
              <Card.Img variant="top" src={pro5} />
              <Card.Body>
                <Card.Title className="pro-title">Protein-ProMax</Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto"
                  style={{ backgroundColor: "			#fd7e14", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#fbe9e7",
              }}
            >
              <Card.Img variant="top" src={pro7} />
              <Card.Body>
                <Card.Title className="pro-title">
                  Casein Slow Digest Protein
                </Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto"
                  style={{ backgroundColor: "			#fd7e14", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#fbe9e7",
              }}
            >
              <Card.Img variant="top" src={pro5} />
              <Card.Body>
                <Card.Title className="pro-title">Mass Gainer Pro+</Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto"
                  style={{ backgroundColor: "			#fd7e14", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>{" "}
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#fbe9e7",
              }}
            >
              <Card.Img variant="top" src={pro7} />
              <Card.Body>
                <Card.Title className="pro-title">
                  {" "}
                  Collagen Boost Protein
                </Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto"
                  style={{ backgroundColor: "			#fd7e14", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "#fbe9e7",
              }}
            >
              <Card.Img variant="top" src={pro5} />
              <Card.Body>
                <Card.Title className="pro-title">
                  BCAA Enhanced Whey{" "}
                </Card.Title>
                <hr></hr>
                <Card.Text className="text-alginmnet">
                  Description: Vegan protein blend made from pea and brown rice
                  with a smooth chocolate flavor. Use: Perfect for
                  lactose-intolerant or plant-based athletes.
                </Card.Text>
                <Button
                  className="d-block mx-auto"
                  style={{ backgroundColor: "			#fd7e14", borderColor: "#20c997" }}
                >
                  BUY Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
