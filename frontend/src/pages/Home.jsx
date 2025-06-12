import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductModal from "./ProductModal";
import Login from "./Login";

function Home() {
  const [home, setHome] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchHome = async () => {
      const response = await fetch(
        "https://fullstack-ecommerce-production-f0f5.up.railway.app/api/products"
      );
      const data = await response.json();
      setHome(data.content);
      console.log(data.content);
    };
    fetchHome();
  }, []);

  const handelbuy = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container">
      <header className="headera">
        <div className="input2">
          <span>
            <input className="searches" type="text" placeholder="Search..." />{" "}
            <button className="search">Search</button>
          </span>
        </div>
        <h1>MEGA DEALS</h1>
        <br />
        <h2>Up to 70% off</h2>{" "}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDp4mYZud5Jo_3AJR3MgDSKqU56-99KLLDw&s"
            className="img"
          />
        </div>
        <div>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIWFRUXFRgYGBcYGBcYFRkZGxkXGBkgGhgdHSggGBolHRYVITEhJSkrLi4uFx8zODMsNygtLi0BCgoKDg0OGBAQGi4dICItLS0tKy0rLS8tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0rLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHCAH/xABIEAABAwIDBAcEBgcFCAMAAAABAAIRAyEEEjEFQVFhBhMicYGRoQcyUrEUQpLB0fAjcoKywuHxFWJjo9IzQ0RUc5Oi8hYXU//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJREBAQACAgICAQQDAAAAAAAAAAECEQMhEjEiQWEEcYHBQqHw/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIrGNxbaTC95gDzJ4BaZtDbj6jtco3NG7v4lBvDngEAkAnTn3cULxxC5w7GuNydN/wCCp+mO4qbXTpIeOIVS5p9NPFff7QcN5TZp0pFzc7UePrHzVLtsPiC4wdQTr4Js06Ui45tfbdQxSa8gDUA+QW+dAtsGvQLHmX0zBJ1LT7p+Y8E2abOiIqgiIgIiICIiAiIgIiICIiAiIgIiICpe4AEkwAJJR7wBJMBc96cdNqILsMxwcILavj9W/LXvA4oMLpB0qZWfOdoptMNlw36E8zZYja03EEcjPyWomvgpn6Own+8M3PQ6LNPSOnEERw/puUabC6sFQ6v+dQoD/wCRU9wPnHqqT0jp/D62UE+7Efn+oVH0j82/FQJ6S0/h9UPSZvwz4oJivjwz3iBPEkE+asf2tTg9oW3T9yjanSGk8Q6m13JwB+ajq1bDktp06FNr6rwwENEybWtbXVBN4S+Z5118J/otn6AY3JjA3dVaW+I7Q+RWu0NmVabW52yA2HFpndrxjeq9lYnqq9Kp8NRp8Jg+hK89ys5O3o8ZePp3FECL1PKIiICIiAiIgIiICIiAiIgIiICIo/bmN6qkSPeNm953+ASCA6UbbDBUdPYpNcT+yCSfRebmHF4l9R7KNV7i9z3BrHOylxJvAtv8l2za9F9WnkaJzOaDwAmTPK0eKtbDxTNl06odWBfVf1jyB2haGtEmwF7mNSt5Y31GJlPdccbsnHkx9FxF9JpvHzClsF0F2lU1ptpD/EeB6NzFbhtT2ilxPVMLj8Rl3qSAPVQNfpZjamjsvn/DATxk91d2+lVP2Z4s+9iaQ7g93rAVx3swxG7Fs+w4fxLGZjsc6TmefAnUTvdwuqnbSxtPUuG++cWmNzuNldYp8mNivZ1jm+4+lU7nuaT4ObHqoHF7Ax1Kz8PVHMAOb5tJC3HD9MMSz3hmHn8wD6qd2d0zpVIbUBY7xHofuJTwl9HlZ7jk/wBCxX/5VfsuWx9Atm1jjGOq03htNr3guBAmMg1/XnwXR62Do1hmYQObfvCtbMwZpudMERAPj/ILnMc5lNzpu5YXG6vaXwYmo1p+tmHm1y1DENMuB15LbMNUy1GHg4eUwfQlaN0j2rToYqtSc6C2obHdPaHoQuf6vC7ljp+lyncrvWxsT1lCk/4qbT5gLMXkz+2MQKpdSxlSmyeyGvd6NFl6I9mm1n4nBh9Rxe5ry3MfeIAab87rcrFbWiIqgiIgIiICIiAiIgIiICIiAtI6R7QD6hJdFOnIBOnM+fyCm+k+2W0Kbhmglsk/C3j38FwnpH0hfiX5GEtpgwANf/b5fPePXbGXfSY2700gmnhx3u0/p8+5a9Q2RXxJzPMm0ZjEl0xlaeJ3n7wruA2c1gbUqRk4cToRxzb55juWTiNtOIDMzgyCJaYebQJvA0EgRMXlLdrMdLLcFRpmXOzdmw1d2m+hBPmF8djqYDmtp6EHtG8ixtxv6KPglVCjxRpJ0NuvbYZGh0A2JygAs0m/ZPPdvVurtkumWsjSIMEZnOOpn3nE+XBSlTAYWi+l1rCWuwjahALu1VdMSfqix5LJ2bs/D1w8jBuptaxzus617mggSNQAVBBDGUn5GuYRAiWmTck6cf5L47Z9OqSWEGT2WAXzFwAEHdc35blhGiO5UBrm+6dDNrHzVEnRbWwxBY4kcSew4SQMriLTBgOtvm4WzbF28yuIPZfw0v8AceXktcpbZD8zagLmT7xJzxuBvF4aCRfKI4RgYnCOYRUDo3NI3+HwiAOW7Raxy0xlht0dx3HzXOfa9g4xVLEAWxFFpJ/xKf6N/p1fmto6P7bFZuR/vjjv/n81X0q2a3FYbqSYeyoKlJ0TFsr2nfBEHvaOavL3jtnj96cgwxuvQ/sNrzharfhqA+bf5LhNbAChiBTd2w0iRcZhqRI0Xq7YGz6NCgxtCk2kwtDsreJANzq48yuEu+3azXSRREVQREQEREBERAREQEREBYu0saKNMvO7QcTuCylzL2n9IzTLmNNmDKP1zqfAW71ZN1LWk9POkLq1Q0mum8vdz08hoBx8FG7LwQpt62o0FkREg+HJ2+fuscfo7QD6uaoQIOa+jnSIbeBYHeR3hZ22cUHOzNLS0HJcgvdE9p1hMzY66b7rVuyRhY3Fl5m0RAG5vLvVhrFlYPB1c0tpOc5sEjIXROktjQhX8dgy3tBjmi2ZjgQ5hOmtywnR3gb64uWrqtaTFbDt/tJjMogVKIiBFm05t4FQWKdL3x8To8yqjtOp13XZv0s5s0N1FtIj0WKZOpW5GW4UsfhXYhrnuaWMwrGNLmPc3rBxbF4k8lb2vXZWaS/aOeAS2mKL2sJAsAAY5SZhakQvhV8RdJUlVpgYNjoEmu+8XgMZaeElQ+c96yXYxzqbac9hrnOAi8ugG/7ISwYtWnKv4HFgHLUEskWmI7uVr/kqgCdLq3WokXLTbiLKKv16b6bs+gk5YsCJmGjl6FbXszH9awGe0Ne/cQoHZLGvY4vEuy9klzRDJLSRmMNgjfOogb1Ts3FhlaAQWusYBA1tE879xK3jfpzzn2tdOtlnrGYtg7FQ5KoGjKoE+DXiXDmHDgvQ+wX5sNQPGlT/AHQuU7NFKo/qa7c1GtDXtmLghzCCNCHDXmuwYSk1jGtYIa1oDRwAED0XPLHxreOW4uoiLKiIiAiIgIiICIiAiIgx8fiRSpPqHRrS7vgaLzv0zxpqPDSZJJe7nv8AUrtPtCxeTC5d9R7W+Alx/dC4JjqmfEEm4BA8B2iPOFuemb7SWGpup0DBzdZaBJvq45d5HHdu5RbzJ0jlf71IbVLRDRLcrRacxk3ubR5KOYjTd9ssqxiOpFQu+k02nq80w2jvy3iSFEbdrPY+jJOcYamHB8mZLyQ4HUXuCohmLe2Ye8E6kOcCe+DdKVaX5qhc7iT2naR9bVZuO5SVdr0BGen7kw4G5pk7jxadzvA31sArdOjOMoYr9DWaOtDSGviDUZva74iOBmYnVQnSfo+7CulsmkTY728j+Kzhncb45fxf6v8A3+1s33EI5yoJXxzlbLl6GVbiqZhSewtgVsU7sNhs3e73R+J5D0W14rZez9nNDsQTWqkdlh1PczQDm6Vi5SLpqmx31mu62i0y0Ol0dloIIJLjZtjqSq3bdrOp1ab3VKgeGiXkkCHB0iTbTW6tbW6S18S4aUqbTLKTLNHAn4nc/KFYr7WrPYWOqvc0xLSbGDI9QFnujFoVA14JEiRbdzlZu0aTw4kiBq0dltrCzRA4XA3KMJM2MHTzspKsGljHF14iG304yRH3qpU5hsQXsDt8A+I/mF2noxj+vw7H7yBP575HguC7JrdiOBK6r7LsZNIsn3S8eRBH75WuT1Kxh703tF8lfVydBERAREQEREBERAREQc/9rFeBh28TUPkGAfMrkuxaOfEG5F3usCTq0aQd07l1D2umH4b9Wr/AuVbMqZavvFvvCwDt4sWkgEd63/iz9sva9Fwc8x2Q/LmIAMgaWA+Q0WbsXZLX0DVNKtVPWZMtIgQA0Ok9k7zCitoe++SS7MZlsTz1seSydn4ygKeWoypmzE56bw0kECAQWnSD5o0v9INnMotpOaypTLw8llUjMMpAGjRrMqNGHdlzx2eMi3eJkaLK2ztBlUUmsDw2m1wBe4OcSXFxkgALDOKcWhs9kAgC2hMm+ut1Pl9HS3O8a+q2TZvS9wb1WKb11IiJ+uBz+L5rVyVSXK54zKapLYl6+yusD6uHl1Fub3rObFyCNTa9ptzUfszGUGVQazHVGAHstMEnd4cfyFVg9rVaILWkFhMuY4AtdaCOIkWsqMfhKbQ2pSdNN5IDSR1jHalruI4O3hefDLkxy8M719X+r+XSzGzc/lMbQ6a4l4yUQ3DUwIAZ7wH60W8AFrjpc4ucS5x1JJJPivkqqnULTI1gjzBH3r0+OvTntU+m5p7TS3vBHzUphdn0XU2vqYtlNzp7GVz3CDHay+7OolR+MxrqpBcACBFpvcm5JJJupXZtKi1tOqzGNo1hmzB7HOAMkDL2CCC0751WZvXy6pfwwdtbPFBzAKgqNfTbUa4AiWuJAsbj3Vk4Sk59MRTaWhxILngEb4sQSvnSvGNq1WFtQVCKNNrngFoc8ZpgECNRuWThsa/qx2A5xLpdnp3kkSGROpF9OyFUYmBfBcOY+9SmD2m+lSGVpeXV6vZDgDlaGgG+6XR+zyUJRf2neH3rBxDHO7VSo5lPNUawhod2gQXCMwIs5pnmt2+mJ7rdaPSOsHNPVPpnMDnztMXn10XdMC8upsJuS0T3xdeVGOY3tNxD3H4TTLQfHOYXqnZv+yZ+qPks5301jGSiIubQiIgIiICIiAiIg537Y6P6PDVPhqOb9oA/wLkDTlrGwPaNjMXAjQg/VXevaZget2fWjWnFUfsHtf8AiXLgmKcZa8axrzbf8Vuemftm7TY7M7swCA68TccdSFHsBNhc6c1I4lgLGOMutcgGOXaIieMSqOj9IuxVEAgHrGmTpYz9yK+VNkYgAk0KoA1JY6B6Kxg6bXE5zAAnUA+EiCeVlvWDk13kMxbCRVINUk0AS12ogW4CeC54VL3NKvY1jWuhpkRxB3kajiADHNYpKu0aRe4NbqfAeapxVA0zldrAPnoksnx32v5WSVTKyRs+sQCKNQgiQQxxBHIxdYrgQSDYjUGxC1EfZWbT2c40+skRBMb7TPyWLUw72iXNIExJG+/4HyVDXHiY381LblPjT931fJWy7GwtWjhziKVNz6tUllItZnyMB7byIIkkZRPNWOmjX9ZSc9pBOHpSS3LL4JfuAmSJG6QrtECwibzHLVStRjYYM12tkgtgXvrN7xqFhbNoFzhaReYgmBBNjpuur2KxIcHOywSYsSZHjv00gW0Qq1h3T3kra9gdCH7QwLRTqBrxXfWGaQCwjqyJAtOUO04rUaIO7Xd3mw9SF6E9n+zupw45BrB+yL+pPkmSYuaYP2L4nO3rKtMMntFriXAcQMokruGHpZGNbM5WgT3CFcRc2hERAREQEREBERAREQUV6Qe1zXCWuBBHEEQV5s2zs12Hr1sK73qbzlPEatPi0tPivSy5d7ZujxLWY6mL04ZVj4Z7LvAkg8nDgtY3VSxz7ZuMBpGi6TrlaAS4g3AEcHcTHInTCxrnl2Zz5fN+NtL6cIg7ljudo9lp++xB5HTyWc1wqNGXtVIvI1ncAdXDjvPOCdDFOPqkR1tSDYjO6COYm6poYWpUnIxz41ytLo74Ct1WRoQbTafzKuYbaFSm1zWPLA7LmymD2ZI7QuNTog+VcNVpdosfTvYkObfkViV6rnGXEk8Tcqc27inilRoPe5zo65+ZxcQ547Dbm0Mgx/fUE5TU9q3OngQ81HmTDy0+9ZrGNGo93Q/mx1bbzpxFXf2yPK33LI/tHElhqWLQ4NLjSpO7RBIBJaSTAOqja1UucXOMucSSeJJkqSCuXvmxMuLjA3njCtuaRqFsfRXaApUq8muwO6v9LSYHZILrEmwmY81X0hrmthhUGKrVWNrBuWqxrYcWOIII1tI8VZ10Nep4+q0Q2rUaBua9wHkCqsdj6uIINR7n5GgDgAIHmbSd9pWK1hOgWdh6GVvWRIEW4m14+G414idQDUStPBsaycoaSTF3ZmnI1zAKlsru1JsQQTvbChMfWzP1JA3nU9/ErJr40sZlHZzXLB7oNrtm7Zy+nJRrBynkNSToB36Kxmtj6F7ONbENtIYQ8ji42pjvkk+S9GbPwwpU2sH1Rfmd585Wgeyzo31TOseO0DmdzqEaDk0W8l0dc7d1uCIigIiICIiAiIgIiICIiAreJoNqNcx7Q5rmlrmnQgiCDyhXEQeZ+leyHbPxdWgZNOZYTvpuu3vIu08S0qPZULO0w6iNxsd3I7p3i3f17227E6zDMxTR2qLsr+dN5A9H5ftOXEadYsNrjgtz0y2CjS633LOykPJBy5tctxLTDXEnkeZOJi8HDg0BwdllwcALic0Xu22qpwWKFiw5TvIueMOaTD2zuPnuVdbHzJewSYvJgNAgAHUE9ombmQeap7YeJque4ueS5xNybkqzKlX0mOOVj9LwdNAXdoC8R6Ky7CTJyiCYbDhAJuLk6QHX5J0qfp7fwf0M4Xq6oBbd2Vn+01ze/wAY8BC06VJVtmkNacrp+tpluQG5YNx2m34kKkYE9rsmABEkCJcAJ8JTRtb2ftStRnqajmZomIvGliOZWXiMdicS3LUql4aQQw5ZJMiQAJMCe4KyaLWta4uEBxHYuZF9dN8BZ2DxYY15bvDXMJgTJBcC49p0Hs23Z9JlOhHimGDMRocuXXtAfWOkHWN/OCmIrBrs83I7Lfh5Hjf8zKY/aIJJF3EAE62FhqSZA3yTzOii6lTeSjO1x7pMkraeiezAGnF1BLWz1beJ0zH5BavgsM6rUYze5wAH3nu1XU6+HDaTaTRaWMHi5oXPlz8Z+7pxYeVdc2fhhTptY0QAB57z5rIQIiCIiAiIgIiICIiAiIgIiICIiDF2rgW16NSi/wB2oxzD3OBHndeVMZh3Unvpv95j3McP7zSWu9QV61Xnz2zbI+j7QNQCGYhoqDhnbDXj0a79talStR2dsfEVm56VJziGlxay7soiTl1OosJKsNxpFnCY81unst23SpYyl1lVjBdji5waBLHASSd5DfMLqfSDYWycfJqOoZz/AL2nUY2p4kGHftAqTJbi8/MxLCSdCZ3kG+uhHrOqyMPVaPrSJkghrgYBAtF/eO9b3tX2OG5wmMp1BubU7J+22QfshazivZttOmbYbOONN9Nw8s0+i3uM9sXEbRLgQX3gCcgmAWuic2ktHkFhOrtzOdmJzZpiBY+Cqr9GMbTOV+Erg/8ATd84Xyn0cxZ0w1TxGX5wp5YrrJY+lNAgNnv/ADbwWPUrudqbKdw/QnFu94Mp/rOBPpI9VL4XoGxomtULvRvl/NYy5sI1OLOtLwtF9Q5abS4+g7yqTRykg3IJHlwXVMDg8PTEMyyNLj0C5vtpmXEVR/iO9TP3rPHy+eVjXJxeGMqY6D4cOrmodKbCfE2+WZb9TGatQb8WIpfvg/ctY9nwDKb6jh71SPIQPUlbdsmnmxmFH+KXfZpvd8wFx57vkxjpwzXHlXU0RF6HAREQEREBERAREQEREBERAREQFpntU2CMVg8wbmfROcCLlujwPCD+ytzRB4y21g8lYjcWgj5LEgbpHcV6s6V9AsJi6VWMPTbXc05KgaGuD9RJG4nXjJXmfHUeqe6nUpOY5pLXBzYIIMGfEFKIvMRo5w8SqvpDxpUf9orO6qmbhUOwzefkVBhvxFQ61Xnvc78VU3G1hpXqDue78VkfRm8V8+iDii7qhu1cSNMTV/7j/wAVcO28WRBxVUjgXuI9SqThRxKHCjipqG6+N2lXH++csyni3VBme4ucZknU7vwUa9rQfe8lM9FNljFVhRD8oIc4ujSBpHNWWY907vTo3QGoBhm2nNn8Lm/LRbb0XZm2hRHw0qz/AN1n8ZUZsTZww1HqWyW/EY1mT81PdBW5sbWd8FBjftvJ/gC8sy8+bcemzx4tVv6Ii9byiIiAiIgIiICIiAiIgIiICIiAiIgLg3ty6OdVim4to7FcZXboqtEf+TAD+y5d5UJ0z2CMdg6uHNnETTd8NRt2numx5EoPKQZH9F9hZGIoOY5zXAhzSWuB1BBgg9xBVktUVby/nf8AJfI7vRXI/MFCPzZEWoSOauFqpIQWHUlPdCcR1eJYd2YeRMH0JUOR3rIwDstRp581LNzSy6u3di06FwLdQBunW+/RTHs0pS3FVvjxBaP1abQ397OtaO0GDC9eIA6vNA0zRp9pb10DwPU4DDsPvGnnd+tUJqH95ef9Pj3a9HPl1In0RF6nmEREBERAREQEREBERAREQEREBERAREQcW9sfQ1zapx1FssfHXAfVfpm/VdaeY5rl3UFeuHsDgQQCCIINwRzG9a/V6DbOcZOEpzM6ER3CYHcivMv0c8E6gr0xU6B7OdrhWeBePk5WT7Otm/8ALf5lX/WoPNhoqnql6Sd7NdmH/hv8yr/rVv8A+sdmf8uf+7V/1IPOPUo2jF16Rb7NdmD/AIb/ADa3+tWm+y7ZgcXCg4TFutq5fAZtUNuRdHm1cW6jg2uOV9QSNwGrj3ABx8F6OY0AACwAgdyg9g9D8Hg3mpQpZXkRmLnOIG+MxMTyU8kmi3YiIqgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//2Q=="
            className="imeg"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdvTuH3pckkhcoXLup4FN112luda1f2KWcg&s"
            className="imag"
          />
        </div>
        <div className="get">
          <h3 className="dot">.</h3>
          <h3 className="dot1">.</h3>
          <h3 className="dot2">.</h3>
        </div>
      </header>
      <div className="containerbar">
        <nav className="navbar">
          <img
            className="icon"
            src="https://img.icons8.com/?size=100&id=mBkyWceUPlkM&format=png&color=000000"
          />
          <img
            className="icon"
            src="https://img.icons8.com/?size=100&id=y1jile6KU9QN&format=png&color=000000"
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/18900/18900088.png"
            alt=""
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/3098/3098405.png"
            alt=""
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/11107/11107521.png"
            alt=""
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/428/428001.png"
            alt=""
          />
        </nav>
      </div>

      <div className="product">
        {home.map((product) => (
          <li className="items" key={product.id}>
            <div
              onClick={() => {
                setSelectedProduct(product);
              }}
            >
              <img src={product.imageUrl} alt="Pic" />
              <h2>{product.title}</h2>
              <h2>{product.price} Price</h2>
              <button onClick={() => handelbuy(product.id)} className="buy">
                View Detail
              </button>
            </div>
          </li>
        ))}
      </div>
      <nav className="buttom">
        <Link to="/Home">Home</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Login">Login</Link>
      </nav>
    </div>
  );
}

export default Home;
